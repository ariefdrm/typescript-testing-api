# Login API

This is a simple login API built with Express.js and TypeScript. It uses PostgreSQL for the database and bcrypt for password hashing.

## Prerequisites

- Node.js
- PostgreSQL

## Installation

1. Clone the repository
2. Install dependencies
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add the following environment variables:
   ```
   DB_HOST=
   DB_USER=
   DB_PASSWORD=
   DB_DATABASE=
   DB_PORT=
   ```
4. Create the `users` table in your PostgreSQL database using the `login.sql` file.

## Available Scripts

- `npm start`: Starts the server in production mode.
- `npm run build`: Compiles the TypeScript code.
- `npm run dev`: Starts the server in development mode with hot reloading.
- `npm run lint`: Lints the code.

## API Endpoints

### `GET /api/users`

Returns all users in the database.

**Response:**

```json
[
    "data" : [
        {
            "id": 1,
            "email": "user@example.com"
        }
    ]
]
```

### `POST /api/register`

Registers a new user.

**Request Body:**

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**

```json
{
  "message": "User created successfully"
}
```

### `POST /api/login`

Logs in a user.

**Request Body:**

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**

```json
{
  "message": "User found",
  "user": {
    "id": 1,
    "email": "user@example.com"
  }
}
```
# typescript-testing-api
