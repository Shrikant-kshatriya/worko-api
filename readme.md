# Worko API

## Overview

Worko API is a Node.js-based RESTful API for managing users. This API includes CRUD operations for users and uses JWT for authentication.

## Features

- User Authentication
- Create, Read, Update, Delete (CRUD) operations for users
- Input validation
- Middleware for authentication and validation
- Unit tests with Jest

## Getting Started

### Prerequisites

- Node.js (v12+)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Shrikant-kshatriya/worko-api.git
   cd worko-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add your environment variables. Example:
   ```env
   PORT=3000
   JWT_SECRET=your_jwt_secret
   MONGODB_URL=your_mongodb_url
   ```

4. Start the server:
   ```bash
   npm start
   ```

### Running Tests

Run the test suite with:
```bash
npm test
```

## API Endpoints

### Authentication

#### Login

- **URL**: `/worko/auth/login`
- **Method**: `POST`
- **Description**: Authenticate a user.
- **Request Body**:
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```

### Users

#### Get All Users

- **URL**: `/worko/user`
- **Method**: `GET`
- **Description**: Get all users.

#### Get User by ID

- **URL**: `/worko/user/:id`
- **Method**: `GET`
- **Description**: Get user details by ID.
- **Headers**: `Cookie: token=<your_token>`

#### Create User

- **URL**: `/worko/user`
- **Method**: `POST`
- **Description**: Create a new user.
- **Request Body**:
  ```json
  {
    "email": "user@example.com",
    "password": "password123",
    "name": "User Name",
    "age": 25,
    "city": "City",
    "zipcode": 12345
  }
  ```

#### Update User

- **URL**: `/worko/user/:id`
- **Method**: `PUT`
- **Description**: Update user details.
- **Headers**: `Cookie: token=<your_token>`
- **Request Body**:
  ```json
  {
    "email": "user@example.com",
    "name": "New User Name",
    "age": 26,
    "city": "New City",
    "zipcode": 54321
  }
  ```

#### Patch User

- **URL**: `/worko/user/:id`
- **Method**: `PATCH`
- **Description**: Update user details.
- **Headers**: `Cookie: token=<your_token>`
- **Request Body**:
  ```json
  {
    "email": "user@example.com",
    "name": "New User Name",
    "age": 26,
    "city": "New City",
    "zipcode": 54321
  }
  ```

#### Delete User

- **URL**: `/worko/user/:id`
- **Method**: `DELETE`
- **Description**: Delete a user by ID.
- **Headers**: `Cookie: token=<your_token>`

## Project Structure

- `controllers/`: Contains the user controller.
- `daos/`: Data access objects for interacting with the database.
- `dtos/`: Data transfer objects for user data.
- `middlewares/`: Authentication and validation middleware.
- `models/`: User model definition.
- `routes/`: Route definitions for the API endpoints.
- `services/`: Business logic for user operations.
- `tests/`: Unit tests for services, DAOs, and controllers.


## License

This project is licensed under the ISC License.

---