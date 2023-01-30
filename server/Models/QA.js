const { TOKEN } = require('../config.js');
const axios = require('axios');

module.exports = {
  getQuestions: (product_id, page, count) => {
    var options = {
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions',
      headers: {
        Authorization: TOKEN
      },
      params: { product_id, page, count }
    }

    return axios(options);
  },

  getAnswers: (question_id, page, count) => {
    var options = {
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${question_id}/answers`,
      headers: {
        Authorization: TOKEN
      },
      params: { page, count }
    }

    return axios(options);
  },

  addQuestion: () => {

  },

  addAnswer: () => {

  },

  likeQuestion: (question_id) => {
    var options = {
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${question_id}/helpful`,
      headers: {
        Authorization: TOKEN,
      },
      params: { question_id },
      method: 'PUT'
    }

    return axios(options);
  },

  reportQuestion: (question_id) => {
    var options = {
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${question_id}/report`,
      headers: {
        Authorization: TOKEN,
      },
      params: { question_id },
      method: 'PUT'
    }

    return axios(options);
  },

  likeAnswer: () => {

  },

  reportAnswer: () => {

  }
}