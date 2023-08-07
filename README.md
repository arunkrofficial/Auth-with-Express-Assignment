# Auth-with-Express-Assignment
# User Authentication Project

This is a simple user authentication project built using Express.js for the server and basic client-side HTML and JavaScript. It demonstrates user registration, login, and profile fetching functionality.

## Features

- User registration with encrypted password storage.
- User login with JWT-based authentication.
- Fetching user profile details after authentication.

## Project Structure

The project is organized into two main folders: `Client` and `Server`.

### Client

The `Client` folder contains the client-side code for the user interface.

### Server

The `Server` folder contains the server-side code, including routes, controllers, middleware, and the database configuration.

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/auth-project.git
   cd auth-project


 #Install dependencies for both the client and server:
cd Client
npm install
cd ../Server
npm install


 #Create a .env file in the Server folder and add your environment variables:
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

#Run the server and client:
#In the Server folder:

npm start
#In the Client folder:
# If you have a server running locally on port 5001
npm run start
Open your browser and navigate to http://localhost:5001 to access the client interface.


#Technologies Used

- Express.js
- MongoDB (with Mongoose)
- JSON Web Tokens (JWT) for authentication
- Bcrypt.js for password encryption
- HTML, CSS, and JavaScript for the client interface

  #Contributing

  Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to submit a pull request or open an issue.

  
