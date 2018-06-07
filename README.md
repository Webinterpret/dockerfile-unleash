# Unleash docker image

## Build image

`docker build . -t wisas/unleash`

## Run container

`docker run -e DATABASE_URL=postgres://user:password@host/dbname -e CREDENTIALS=username:password -e UNLEASH_PORT=4242 -p 4242:4242 wisas/unleash`

Environment variables `DATABASE_URL` and `CREDENTIALS` are mandatory. Viariable `UNLEASH_PORT` is optional.

