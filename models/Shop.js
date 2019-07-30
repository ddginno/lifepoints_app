const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  shopTitle: {
    type: String,
    required: true
  },
  shopImg: String
});

module.exports = mongoose.model("Card", cardSchema);
