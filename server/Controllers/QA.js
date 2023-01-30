const models = require('../Models/QA.js');

module.exports = {
  getQuestions: (req, res) => {
    var { product_id, page, count } = req.body;

    models.getQuestions(product_id, page, count)
      .then(({ data }) => {
        res.status(200);
        res.end(JSON.stringify(data));
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(404);
      })
  },

  getAnswers: (req, res) => {
    var { question_id, page, count } = req.params;

    models.getAnswers(question_id, page, count)
      .then(({ data }) => {
        res.status(200);
        res.end(JSON.stringify(data));
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(404);
      })
  },

  addQuestion: (req, res) => {

  },

  addAnswer: (req, res) => {

  },

  likeQuestion: (req, res) => {
    var { question_id } = req.params;

    models.likeQuestion(question_id)
      .then(() => res.sendStatus(204))
      .catch((err) => {
        console.log(err);
        res.sendStatus(422);
      })
  },

  reportQuestion: (req, res) => {
    var { question_id } = req.params;

    models.reportQuestion(question_id)
      .then(() => res.sendStatus(204))
      .catch((err) => {
        console.log(err);
        res.sendStatus(422);
      })
  },

  likeAnswer: (req, res) => {

  },

  reportAnswer: (req, res) => {

  }
};