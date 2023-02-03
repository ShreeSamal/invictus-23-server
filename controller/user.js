// Import models
const Users = require("../model/user");

// Define controller functions
//Function to login
const login = async (req, res) => {
  Users.findOne({ email: req.body.email }, (err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (!user) {
      return res.status(404).send({ message: "User Not found." });
    }
    if (user.password != req.body.password) {
      return res.status(401).send({ message: "Invalid Password" });
    }
    res.status(200).send({ message: "Login Successful" });
  });
};

//Function to register
const register = async (req, res) => {
  Users.create(req.body, (err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (!user) {
      return res.status(404).send({ message: "Validation Error" });
    }
    res.status(200).send({ message: "User Registered Successfully" });
  });
};

module.exports = { login, register };
