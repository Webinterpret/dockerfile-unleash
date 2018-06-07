'use strict';

const unleash = require('unleash-server');
const basicAuth = require('./basic-auth-hook');

unleash.start({
  secret: 'super-duper-secret',
  adminAuthentication: 'custom',
  preRouterHook: basicAuth
}).then(unleash => {
    console.log(`Unleash started on http://localhost:${unleash.app.get('port')}`);
});

