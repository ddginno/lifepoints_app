module.exports = function(app) {
  const News = require("./models/News");

  app.get("/api/news", (req, res) => {
    News.find()
      .then(cards => res.json(cards))
      .catch(err => res.json(err));
  });

  app.post("/api/news", (req, res) => {
    News.create(req.body)
      .then(card => res.json(card))
      .catch(err => res.json(err));
  });

  app.patch("/api/news/:id", (req, res) => {
    const { id } = req.params;
    News.findByIdAndUpdate(id, req.body, { new: true })
      .then(card => res.json(card))
      .catch(err => res.json(err));
  });
};

// module.exports = function(app) {
//   const CardShop = require("./models/Shop");

//   app.get("/api/cards", (req, res) => {
//     CardShop.find()
//       .then(cards => res.json(cards))
//       .catch(err => res.json(err));
//   });

//   app.post("/api/cards", (req, res) => {
//     CardShop.create(req.body)
//       .then(card => res.json(card))
//       .catch(err => res.json(err));
//   });

//   app.patch("/api/cards/:id", (req, res) => {
//     const { id } = req.params;
//     CardShop.findByIdAndUpdate(id, req.body, { new: true })
//       .then(card => res.json(card))
//       .catch(err => res.json(err));
//   });
// };
