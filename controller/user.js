// Import models
const Users = require("../model/user");

// Define controller functions
//Function to login
const login = async (req, res) => {
  Users.findOne({ email: req.body.email }, (err, user) => {
    if (err) {
      res.status(500).json({ message: err });
      return;
    }
    if (!user) {
      return res.status(404).json({ message: "User Not found." });
    }
    if (user.password != req.body.password) {
      return res.status(401).json({ message: "Invalid Password" });
    }
    res.status(200).json({ message: "Login Successful" });
  });
};

//Function to register
const register = async (req, res) => {
  Users.create(req.body, (err, user) => {
    if (err) {
      res.status(500).json({ message: err });
      return;
    }
    if (!user) {
      return res.status(404).json({ message: "Validation Error" });
    }
    res.status(200).json({ message: "User Registered Successfully" });
  });
};

module.exports = { login, register };
