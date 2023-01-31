const model = require('../Models/Overview.js');

module.exports = {
  logInteraction: (req, res) => {
    model
      .logInteraction(req.body)
      .then((results) => {
        res.status(201).send(results);
      })
      .catch((err) => {
        res.status(422).send(err);
      });
  }
};