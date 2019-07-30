const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
  titleContent: {
    type: String,
    required: true
  },
  subtitleContent: String,
  imageContent: String,
  desciption: String,
  video: String,
  points: String
});

module.exports = mongoose.model("news", newsSchema);
