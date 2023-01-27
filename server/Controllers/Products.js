const model = require('../Models/Products.js');

module.exports = {
  getAll: (req, res) => {
    model.getAllProducts()
      .then((results) => {
        res.send(results.data);
      })
      .catch((err) => {
        console.log('err', err.message);
        res.sendStatus(404);
      });
  },

  getOne: (req, res) => {
    var id = req.params.productId;
    model.getOneProduct(id)
      .then((results) => {
        res.send(results.data);
      })
      .catch((err) => {
        console.log('err', err.message);
        res.sendStatus(404);
      });
  },

  getStyle: (req, res) => {
    var id = req.params.productId;
    model.getProductStyle(id)
      .then((results) => {
        res.send(results.data);
      })
      .catch((err) => {
        console.log('err', err);
        res.sendStatus(404);
      });
  },

  getRelated: (req, res) => {
    var id = req.params.productId;
    model.getProductRelated(id)
      .then((results) => {
        res.send(results.data);
      })
      .catch((err) => {
        console.log('err', err);
        res.sendStatus(404);
      });
  }
};