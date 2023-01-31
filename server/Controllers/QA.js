const models = require('../Models/QA.js');

module.exports = {
  getQuestions: (req, res) => {
    var { product_id, page, count } = req.query;

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
    var { question_id } = req.params;
    var { page, count } = req.query;

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
    var { body, name, email, product_id } = req.body;

    models.addQuestion(body, name, email, product_id)
      .then(() => res.sendStatus(201))
      .catch((err) => {
        console.log(err);
        res.sendStatus(422);
      })
  },

  addAnswer: (req, res) => {
    var { question_id } = req.params;
    var { body, name, email, photos } = req.body;

    models.addAnswer(question_id, body, name, email, photos)
      .then(() => res.sendStatus(201))
      .catch((err) => {
        console.log(err);
        res.sendStatus(422);
      })
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
    var { answer_id } = req.params;

    models.likeAnswer(answer_id)
      .then(() => res.sendStatus(204))
      .catch((err) => {
        console.log(err);
        res.sendStatus(422);
      })
  },

  reportAnswer: (req, res) => {
    var { answer_id } = req.params;

    models.reportAnswer(answer_id)
      .then(() => res.sendStatus(204))
      .catch((err) => {
        console.log(err);
        res.sendStatus(422);
      })
  }
};