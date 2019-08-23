const mongoose = require("mongoose");

const UserData = new mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  password: String,
  userImg: String,
  userPoints: Number,
  email: String,
  confirmed: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("user", UserData);
