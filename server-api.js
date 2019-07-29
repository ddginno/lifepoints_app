module.exports = function(app) {
  const Card = require("./models/Card");

  app.get("/api/cards", (req, res) => {
    Card.find()
      .then(cards => res.json(cards))
      .catch(err => res.json(err));
  });

  app.post("/api/cards", (req, res) => {
    Card.create(req.body)
      .then(card => res.json(card))
      .catch(err => res.json(err));
  });

  app.patch("/api/cards/:id", (req, res) => {
    const { id } = req.params;
    Card.findByIdAndUpdate(id, req.body, { new: true })
      .then(card => res.json(card))
      .catch(err => res.json(err));
  });
};
