const express = require("express");
const router = express.Router();
const News = require("../models/News");

router.get("/", (req, res) => {
  News.find()

    .then(cards => res.json(cards))
    .catch(err => res.json(err));
});

router.get("/get-by-id/:id", (req, res) => {
  console.log(req.params.id);
  News.findById(req.params.id)
    .then(item => res.json(item))
    .catch(err => res.json(err));
});

router.post("/", (req, res) => {
  News.create(req.body)
    .then(card => res.json(card))
    .catch(err => res.json(err));
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  News.findByIdAndUpdate(id, req.body, { new: true })
    .then(card => res.json(card))
    .catch(err => res.json(err));
});

module.exports = router;
