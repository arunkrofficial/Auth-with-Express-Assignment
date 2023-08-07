const express = require("express");
const { userSignUp, userLogin, getUserDetails } = require("../controller/userController");
const { signupValidator } = require("../middleware/signupValidator");
const { loginValidator } = require("../middleware/loginValidator");
const { authenticateUser } = require("../middleware/authenticateUser.js");


const userRoute = express.Router();


userRoute.post("/signup",signupValidator,userSignUp);

userRoute.post("/login",loginValidator,userLogin);

userRoute.get("/",authenticateUser,getUserDetails)  


module.exports ={
    userRoute
}