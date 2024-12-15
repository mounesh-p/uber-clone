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