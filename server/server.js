const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const fs = require("fs");
const bodyParser = require("body-parser");

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

app.use("/api/news", require("./api/news"));
app.use("/api/shop", require("./api/shop"));
app.use("/api/user", require("./api/user"));
// setup mongoose
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error(err));

app.listen(4000);
