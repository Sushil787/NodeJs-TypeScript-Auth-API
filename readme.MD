#  A test Authentication API written on TypeScript and Node

This is a AUTH API with JWT (JSON Web Token) authentication. It allows users to sign up and sign and get JWT for further resource access.

## Features

- User sign up with password hashing using bcrypt
- User sign in with JWT authentication
- Integration with MongoDB using Mongoose

## Prerequisites

- Node.js installed on your machine
- MongoDB database for storing user data

## Getting Started

1. Clone the repository:

   ```bash
   git clone 
   ```

## Set up environment variables

1. Create a `.env` file in the project root folder.

2. Add the following environment variables to the `.env` file:
- DB_URL=your DB url
- SECRET_KEY =lsdfasdfjslf8082302ljslf
- PORT=8080
### Then
  ```bash
npm install 
npm start 
```
> SIGNUP
> Method: POST
> localhost:port/signup

> SIGNIN
> Method: POST
> localhost:port/signin

## I have added postman.json file for testing you can view 
   

