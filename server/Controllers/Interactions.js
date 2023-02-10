const model = require('../Models/Overview.js');

module.exports = {
  logInteraction: (req, res) => {
    model
      .logInteraction(req.body)
      .then(() => {
        res.sendStatus(201);
      })
      .catch((err) => {
        console.log(err);
        res.status(422).send(err);
      });
  }
};