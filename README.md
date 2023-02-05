# Referral Service

## Objective

Engine for managing user referrals

## Architecture

### Design

- Clean architecture

### Technologies

- Node (v18.12.1)
- Typescript/Javascript
- Express
- Jest
- Supertest
- Github Actions
- Docker

## How to use

### Requirements

- Docker

### How to run

- If use NVM (Node Version Manager) run the bellow command:

```bash
nvm use && npm install
```

- If **not** use NVM (Node Version Manager) run:

```bash
npm install
```

- Duplicate file `.env.example` and rename it to `.env`
- Fill the environment variable with the following examples:

```bash
DATABASE_URL=postgresql://<user>:<password>@localhost:5432/<database_name>
PORT=7000
PORT_DEBUG=9222
```

- Up service using docker with the following command:

```bash
docker-compose up -d
```

- To visualizes service logs run:

```bash
docker container logs app.referral -f
```

- With browser access [Swagger](http://localhost:7000/api-docs/#/).
  - If using different port than `7000`, Change swagger url `http://localhost:<PORT>/api-docs/#/`.

### How to run tests

- In terminal run:

```bash
npm run test:ci
```

- Open file `coverage/lcov-report/index.html` with some browser to visualize code coverage.
