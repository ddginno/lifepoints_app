const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  titleContent: {
    type: String,
    required: true
  },
  subtitleContent: String,
  imageContent: String
});

module.exports = mongoose.model("Card", cardSchema);
