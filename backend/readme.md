# User Registration Endpoint

## Endpoint
`POST /users/register`

## Description
This endpoint allows a new user to register by providing their email, first name, last name, and password. Upon successful registration, a JSON Web Token (JWT) is generated and returned, which can be used for authentication in subsequent requests.

## Request Body
The request body must be in JSON format and should include the following fields:

- `email` (string, required): The email address of the user. It must be a valid email format.
- `fullname` (object, required): An object containing the user's name.
  - `firstname` (string, required): The first name of the user. It must be at least 3 characters long.
  - `lastname` (string, optional): The last name of the user. It must be at least 3 characters long if provided.
- `password` (string, required): The password for the user account. It must be at least 6 characters long.

### Example Request
```json
{
  "email": "user@example.com",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "password": "securepassword"
}
```
### Example Response
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "user@example.com",
  }
}
```
### Example Response (Error)
```json
{
  "errors": [
    {
      "msg": "Please fill in all fields",
      "param": "firstname",
      "location": "body"
    },
    {
      "msg": "Please fill in all fields",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Please fill in all fields",
      "param": "password",
      "location": "body"
    }
  ]
}
```
## User Login Endpoint

### Endpoint
`POST /users/login`

### Description
This endpoint allows an existing user to log in by providing their email and password. Upon successful login, a JSON Web Token (JWT) is generated and returned, which can be used for authentication in subsequent requests.

### Request Body
The request body must be in JSON format and should include the following fields:

- `email` (string, required): The email address of the user. It must be a valid email format.
- `password` (string, required): The password for the user account. It must be at least 6 characters long.

### Example Request
```json
{
  "email": "user@example.com",
  "password": "securepassword"
}
```
### Example Response
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "user@example.com"
  }
}
```

### Example Response (Error)
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password must be 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```
### Error Responses
401 Unauthorized: If the email or password is incorrect, the response will contain an error message indicating that the credentials are invalid.
```json

{
  "error": "Invalid email or password"
}
```

## User Profile Endpoint

### Endpoint
`GET /users/profile`

### Description
This endpoint retrieves the profile information of the currently authenticated user. The user must be logged in and provide a valid authentication token in the request.

### Request Headers
- `Authorization` (string, required): The JWT token obtained during login or registration. It should be included in the request header as follows:

### Example Request
`GET /users/profile HTTP/1.1`
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "user@example.com"
}
```

`GET /users/logout HTTP/1.1`
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```json
{
  "message": "Logged out"
}
```

## Captain Registration Endpoint

### Endpoint
`POST /captain/register`

### Description
This endpoint allows a new captain to register by providing their email, first name, last name, password, and vehicle details. Upon successful registration, a captain object is created in the database.

### Request Body
The request body must be in JSON format and should include the following fields:

- `email` (string, required): The email address of the captain. It must be a valid email format.
- `fullname` (object, required): An object containing the captain's name.
  - `firstname` (string, required): The first name of the captain. It must be at least 3 characters long.
  - `lastname` (string, optional): The last name of the captain. It must be at least 3 characters long if provided.
- `password` (string, required): The password for the captain account. It must be at least 6 characters long.
- `vehicle` (object, required): An object containing the vehicle details.
  - `color` (string, required): The color of the vehicle. It must be at least 3 characters long.
  - `plate` (string, required): The vehicle's plate number. It must be at least 3 characters long.
  - `capacity` (integer, required): The capacity of the vehicle. It must be an integer greater than or equal to 1.
  - `vehicleType` (string, required): The type of vehicle. It must be one of the following: `car`, `motorcycle`, or `auto`.

### Example Request
```json
{
  "email": "captain@example.com",
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "password": "securepassword",
  "vehicle": {
    "color": "red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```
### Example Response
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzVlZDc0YzRmYWI5MWZlMmUyZTk0MmMiLCJpYXQiOjE3MzQyNjg3NDksImV4cCI6MTczNDM1NTE0OX0.bUzn5OTUXsSc_HD4C_WBh92Xb79raRtIDSluxiUnhFg",
    "captain": {
        "fullname": {
            "firstname": "ganesh",
            "lastname": "pattar"
        },
        "email": "gani@gmail.com",
        "status": "inactive",
        "vehicle": {
            "color": "red",
            "plate": "KA 22 XY 6221",
            "capacity": 3,
            "vehicleType": "car"
        },
        "_id": "675ed74c4fab91fe2e2e942c",
        "__v": 0
    }
}
```

# Captain Routes Documentation

## Overview
This document provides detailed information about the captain-related endpoints in the Uber Clone application. These endpoints allow captains to register, log in, retrieve their profile, and log out.

## Base URL
/captains

## Endpoints

### 1. Captain Registration Endpoint

#### Endpoint

`POST /captains/register`


#### Description
This endpoint allows a new captain to register by providing their email, first name, last name, password, and vehicle details. Upon successful registration, a captain object is created in the database.

#### Request Body
The request body must be in JSON format and should include the following fields:

- `email` (string, required): The email address of the captain. It must be a valid email format.
- `fullname` (object, required): An object containing the captain's name.
  - `firstname` (string, required): The first name of the captain. It must be at least 3 characters long.
  - `lastname` (string, optional): The last name of the captain. It must be at least 3 characters long if provided.
- `password` (string, required): The password for the captain account. It must be at least 6 characters long.
- `vehicle` (object, required): An object containing the vehicle details.
  - `color` (string, required): The color of the vehicle. It must be at least 3 characters long.
  - `plate` (string, required): The vehicle's plate number. It must be at least 3 characters long.
  - `capacity` (integer, required): The capacity of the vehicle. It must be an integer greater than or equal to 1.
  - `vehicleType` (string, required): The type of vehicle. It must be one of the following: `car`, `motorcycle`, or `auto`.

#### Example Request
```json
{
  "email": "captain@example.com",
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "password": "securepassword",
  "vehicle": {
    "color": "red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```
#### Example Response
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzVlZDc0YzRmYWI5MWZlMmUyZTk0MmMiLCJpYXQiOjE3MzQyNjg3NDksImV4cCI6MTczNDM1NTE0OX0.bUzn5OTUXsSc_HD4C_WBh92Xb79raRtIDSluxiUnhFg",
    "captain": {
        "fullname": {
            "firstname": "Jane",
            "lastname": "Doe"
        },
        "email": "captain@example.com",
        "status": "inactive",
        "vehicle": {
            "color": "red",
            "plate": "ABC123",
            "capacity": 4,
            "vehicleType": "car"
        },
        "_id": "675ed74c4fab91fe2e2e942c",
        "__v": 0
    }
}
```

### Captain Login Endpoint

#### Endpoint

`POST /captains/login`

#### Description
This endpoint allows an existing captain to log in by providing their email and password. Upon successful login, a token is returned for authentication in subsequent requests.

#### Request Body
The request body must be in JSON format and should include the following fields:

- `email` (string, required): The email address of the captain.
- `password` (string, required): The password for the captain account.

#### Example Request
```json
{
  "email": "captain@example.com",
  "password": "securepassword"
}
```
### Example Response
```json

{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzVlZDc0YzRmYWI5MWZlMmUyZTk0MmMiLCJpYXQiOjE3MzQyNjg3NDksImV4cCI6MTczNDM1NTE0OX0.bUzn5OTUXsSc_HD4C_WBh92Xb79raRtIDSluxiUnhFg",
    "captain": {
        "fullname": {
            "firstname": "Jane",
            "lastname": "Doe"
        },
        "email": "captain@example.com",
        "_id": "675ed74c4fab91fe2e2e942c",
        "__v": 0
    }
}
```

### Captain Logout Endpoint

#### Endpoint

`POST /captains/logout`


#### Description
This endpoint allows a logged-in captain to log out. The captain must provide a valid token in the authorization header.

#### Request Headers
- `Authorization` (string, required): The token received during login.

#### Example Request

`GET /captains/logout`
Authorization: Bearer <token>
```json
{
    "message": "Successfully logged out"
}
```
### Example Response (Error)
```json
{
    "message": "Unauthorized"
}
```