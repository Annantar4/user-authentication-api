# NestJS Auth API


## Project Overview
NestJS Authentication API is a simple backend that provides user authentication features using JWT (JSON Web Token) and HTTP-Only Cookies. This API is built using NestJS, PostgreSQL, and Prisma ORM, and is containerized with Docker for easy deployment.

The API has four main endpoints:

- Register (POST api/auth/signup) – Registers a new user.
- Login (POST api/auth/signin) – Authenticates the user and stores an HTTP-Only Cookie for the session.
- Get Profile (GET api/user/profile) – Retrieves the currently logged-in user's data.
- Health Check (GET /health) – Checks the API's status.

This API is designed for use in web or mobile applications that require a token- and cookie-based login system.


## Tech Stack
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
- Register (POST api/auth/signup)
  
  Request Body:
  
  ![image](https://github.com/user-attachments/assets/d394c2bf-e77c-433b-b8a1-5a0297199d26)

  Response:

  ![image](https://github.com/user-attachments/assets/e43d5258-7494-4265-8d9f-b2f4a8749131)

- Login (POST api/auth/signin)

  Request Body:

  ![image](https://github.com/user-attachments/assets/15ce4064-5f67-4ee5-9c65-4cf8a9434010)

  Response:

  ![image](https://github.com/user-attachments/assets/65ca81e0-1b5a-4512-a71f-a71da215c2b4)

- Get Profile (GET api/user/profile)

  Response:
  
  ![image](https://github.com/user-attachments/assets/4efec62c-723b-4374-a276-e73d8716a22a)

- Health Check (GET /health)

  Response:

  ![image](https://github.com/user-attachments/assets/45250529-ab2f-4bf6-bbf2-e27aa6dd4eb9)

  ![image](https://github.com/user-attachments/assets/4327294c-4746-47b1-af15-41cbd2fed775)









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




