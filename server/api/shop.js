const express = require("express");
const router = express.Router();
const Shop = require("../models/Shop");

router.get("/", (req, res) => {
  Shop.find()

    .then(cards => res.json(cards))
    .catch(err => res.json(err));
});

router.post("/", (req, res) => {
  Shop.create(req.body)
    .then(card => res.json(card))
    .catch(err => res.json(err));
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  Shop.findByIdAndUpdate(id, req.body, { new: true })
    .then(card => res.json(card))
    .catch(err => res.json(err));
});

module.exports = router;
