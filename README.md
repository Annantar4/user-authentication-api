<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE). 


# NestJS Auth API


## Project Overview
NestJS Authentication API is a simple backend that provides user authentication features using JWT (JSON Web Token) and HTTP-Only Cookies. This API is built using NestJS, PostgreSQL, and Prisma ORM, and is containerized with Docker for easy deployment.

The API has four main endpoints:

- Register (POST api/auth/signup) – Registers a new user.
- Login (POST api/auth/signin) – Authenticates the user and stores an HTTP-Only Cookie for the session.
- Get Profile (GET api/user/profile) – Retrieves the currently logged-in user's data.
- Health Check (GET /health) – Checks the API's status.

This API is designed for use in web or mobile applications that require a token- and cookie-based login system.


## 📌 Tech Stack
- NestJS: A modular, fast, and scalable backend framework based on TypeScript.
- PostgreSQL: A relational database used to store user data.
- Prisma ORM: A modern ORM that simplifies interactions with the PostgreSQL database.
- JWT (JSON Web Token): Used for user authorization after login.
- HTTP-Only Cookies: Used to store authentication tokens for enhanced security.
- Docker: Containerization for easier deployment.
- Docker Compose: Manages database and application services in a single configuration.
- Swagger (OpenAPI): Interactive API documentation.
- Bcrypt: Used for securely hashing user passwords. 

## Docker setup instructions 

```bash
# First-time container build
$ docker-compose up --build

# Run container without rebuilding
$ docker-compose up

# Stop container
$ docker-compose down

# Check running containers
$ docker ps
``` 

## API documentation
Once Docker is running, navigate to http://localhost:3000/api/docs to access the documentation

Example requests/responses:



## Environment variable configuration guide
This .env file contains environment variables for configuring a NestJS application with PostgreSQL and authentication settings.

1. Database Configuration
The application supports two database connection modes:
  - Local Development:
    ```bash
    DATABASE_URL="postgresql://POSTGRES_USER:POSTGRES_PASSWORD@localhost:5432/POSTGRES_DB?schema=public"
    ``` 
    - Connects to a PostgreSQL database running locally on localhost at port 5432.
    - Uses POSTGRES_USER, POSTGRES_PASSWORD, and POSTGRES_DB as placeholders for credentials and database name. 

  - Docker Container:
    ```bash
    DATABASE_URL="postgresql://POSTGRES_USER:POSTGRES_PASSWORD@database:5432/POSTGRES_DB?schema=public"
    ```
    - Connects to a PostgreSQL database running inside a Docker container.
    - The hostname database refers to the PostgreSQL service defined in a Docker Compose file. 
  
  Only one DATABASE_URL should be active at a time. If both are present, the last defined value takes precedence.

2. Secret Token
```bash
SECRET_TOKEN="lankwdiowhjr903409u3i9jksnflksenorfw4eu5930745907390fjsknf..."
``` 
- This is a cryptographic secret key used for JWT signing.
- Ensure this value remains private and is not exposed in public repositories.




