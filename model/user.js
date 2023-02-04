//Import Modules
const mongoose = require("mongoose");
const { Schema } = mongoose;

//Creating User Schema
const schema = new Schema({
    name: { type: String,required: true },
    email: { type: String,required: true,unique: true },
    contact: { type: Number,required: true,limit: 10 },
    password: { type: String,required: true },
  });
  
module.exports = mongoose.model("users", schema);