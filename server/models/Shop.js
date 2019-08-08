const mongoose = require("mongoose");

const shopCardSchema = new mongoose.Schema({
  shopTitle: {
    type: String,
    required: true
  },
  shopImg: String,
  shopPoints: String,
  dateCreated: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("shop", shopCardSchema);
