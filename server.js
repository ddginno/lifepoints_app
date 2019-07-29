const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const fs = require("fs");
const api = require("./server-api");

const app = express();
app.use(express.json());

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

api(app);

app.listen(4000);
