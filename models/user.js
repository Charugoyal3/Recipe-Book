const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userModel = Schema({
  userName: String,
  password: String,
  email: email,
  picture: String,
  biography: String,
});

module.exports = mongoose.model("User", userModel);
