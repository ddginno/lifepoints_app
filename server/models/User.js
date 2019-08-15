const mongoose = require("mongoose");

const UserData = new mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  userImg: String,
  userPoints: Number,
  confirmed: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("user", UserData);
