const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
  titleContent: {
    type: String,
    required: true
  },
  subtitleContent: String,
  imageContent: String,
  description: String,
  video: String,
  points: Number,
  likedByUsers: Array,
  dateCreated: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("news", newsSchema);
