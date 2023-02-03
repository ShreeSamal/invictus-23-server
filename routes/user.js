// Module imports
const express = require("express");
const router = express.Router();
const userController = require("../controller/user");

//Define Routes
router.post("/login",userController.login);
router.post("/register",userController.register);

//Export the router
module.exports = router;