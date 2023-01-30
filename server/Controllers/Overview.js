const model = require('../Models/Overview.js');

module.exports = {
  getCart: (req, res) => {
    model
      .getCart()
      .then((results) => {
        console.log('controllersResults', results);
        res.send(results.data);
      })
      .catch((err) => {
        console.log('err', err.message);
        res.sendStatus(404);
      });
  },
  postCart: (req, res) => {
    model
      .addItemToCart(req.body.sku_id)
      .then((results) => {
        console.log('controllersResults', results);
        res.sendStatus(201);
      })
      .catch((err) => {
        console.log('err', err.message);
        res.sendStatus(404);
      });
  },
};
