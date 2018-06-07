FROM node:8-alpine

ENV UNLEASH_PORT 4242

COPY package.json ./

RUN npm install --production

COPY . .

EXPOSE ${UNLEASH_PORT}

CMD node index.js

