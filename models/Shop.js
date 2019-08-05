const mongoose = require("mongoose");

const shopCardSchema = new mongoose.Schema({
  shopTitle: {
    type: String,
    required: true
  },
  shopImg: String,
  shopPoints: String
});

module.exports = mongoose.model("Shop", shopCardSchema);
