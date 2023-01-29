const models = require('../Models/QA.js');

module.exports = {
  getQuestions: (req, res) => {
    var { product_id, page, count } = req.body

    models.getQuestions(product_id, page, count)
      .then((results) => {
        res.status(200);
        res.end(JSON.stringify(results.data));
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(404);
      })
  },

  getAnswers: (req, res) => {

  },

  addQuestion: (req, res) => {

  },

  addAnswer: (req, res) => {

  },

  likeQuestion: (req, res) => {

  },

  reportQuestion: (req, res) => {

  },

  likeAnswer: (req, res) => {

  },

  reportAnswer: (req, res) => {

  }
};