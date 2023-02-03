//Import all the required modules
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/user");

//Initialize configuration
const app = express();
mongoose.set("strictQuery", true);
mongoose.connect(process.env.MONGO_URI, () => {
  console.log("Connected to MongoDB");
});

//Middlewares
app.use(cors());
app.use(express.json());

//Import Routes
app.use("/user", userRoutes);

const PORT = process.env.PORT || 3000;

//Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
