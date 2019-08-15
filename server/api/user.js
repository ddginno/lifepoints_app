const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/", (req, res) => {
  User.find()

    .then(cards => res.json(cards))
    .catch(err => res.json(err));
});

router.post("/", (req, res) => {
  User.create(req.body)
    .then(card => res.json(card))
    .catch(err => res.json(err));
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;

  User.findByIdAndUpdate(id, req.body, { new: true })
    .then(card => res.json(card))
    .catch(err => res.json(err));
});

module.exports = router;
