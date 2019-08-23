const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const fs = require("fs");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// read .env file
dotenv.config();

// read and parse .env.local file
try {
  const localConfig = dotenv.parse(fs.readFileSync(".env.local"));
  process.env = {
    ...process.env,
    ...localConfig
  };
} catch (error) {}

// setup mongoose
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error(err));

app.use(express.static(path.join(__dirname, "../build")));

app.use("/api/news", require("./api/news"));
app.use("/api/shop", require("./api/shop"));
app.use("/api/user", require("./api/user"));

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.listen(process.env.PORT || 4000);
