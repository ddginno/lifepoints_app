const mongoose = require("mongoose");

const UserData = new mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  password: String,
  userImg: String,
  userPoints: {
    type: Number,
    default: 0
  },
  email: String,
  confirmed: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("user", UserData);
