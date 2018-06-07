'use strict';

const auth = require('basic-auth');
const { User } = require('unleash-server');

const [ username, password ] = process.env.CREDENTIALS.split(':');


function basicAuthentication(app) {
    app.use('/api/admin/', (req, res, next) => {
        const credentials = auth(req);

	if (!credentials || credentials.name !== username || credentials.pass !== password) {
	    return res
                .status('401')
                .set({ 'WWW-Authenticate': 'Basic realm="unleash"' })
                .end('access denied');
	}

        const user = new User({ email: `${credentials.name}@webinterpret.com` });
        req.user = user;
        next();
    });

    app.use((req, res, next) => {
        // Updates active sessions every hour
        req.session.nowInHours = Math.floor(Date.now() / 3600e3);
        next();
    });
}

module.exports = basicAuthentication;

