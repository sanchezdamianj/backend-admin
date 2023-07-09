# Backend Admin

This repository contains the backend for an administration application. It provides a RESTful API for managing users, products, and orders.
Techs involved: Node JS - Typescript - Zod - Mongo DB - mongoose - nodemailer - jsonwebtoken

## Prerequisites

- Node.js (version X.X.X)
- MongoDB (version X.X.X)

## Installation

1. Clone the repository: https://github.com/sanchezdamianj/backend-admin/

2. Navigate to the project directory: cd 

3. Install the dependencies: yarn install

4. Environment Configuration:

- Create a `.env` file in the root directory of the project and define the following environment variables:

  ```
  PORT=3000
  MONGODB_URI=your-mongodb-url
  JWT_SECRET=your-jsonwebtoken-secret
  ```

5. Start the server: yarn dev

## Usage

The server will be up and running on the port specified in the `.env` file. You can send HTTP requests to the API routes to interact with the application resources.

For details on routes and required parameters, refer to the API documentation.

## Project Structure

The project follows a typical backend application structure with Node.js.

- `controllers/` - Application controllers.
- `middlewares/` - Middlewares for authentication and request validation.
- `models/` - Mongoose models and schemas.
- `routes/` - Express routes and controllers.
- `utils/` - Utilities and helper functions.
- `app.js` - Main Express server file.
- `server.js` - Server startup file.

## Contribution

If you wish to contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new branch for your contribution.
3. Make your changes and improvements in your branch.
4. Submit a pull request to the main branch of the repository.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more information.

