const mongoose = require("mongoose");

const UserData = new mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  userImg: String,
  userPoints: String
});

module.exports = mongoose.model("user", UserData);
