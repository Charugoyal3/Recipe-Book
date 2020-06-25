const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require('validator');

const userModel = Schema({
  userName: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    validate: {
      validator: validator.isEmail,
      
      message: '{VALUE} is not a valid email',
      isAsync: false,
      required: true,
    }
  },
  picture: String,
  biography: String,
});

module.exports = mongoose.model("User", userModel);