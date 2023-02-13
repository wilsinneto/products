## Description

The application is a microservice that persists and removes the data sent from the Purchase Order API in Redis.To run the application you need to have docker installed. In addition, you must follow the steps below.

## Installation

```bash
$ npm install
```

## Running the docker

```bash
$ docker-compose up --build
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# test coverage
$ npm run test:cov
```