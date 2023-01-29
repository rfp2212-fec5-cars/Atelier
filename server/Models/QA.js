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

  getAnswers: () => {

  },

  addQuestion: () => {

  },

  addAnswer: () => {

  },

  likeQuestion: () => {

  },

  reportQuestion: () => {

  },

  likeAnswer: () => {

  },

  reportAnswer: () => {

  }
}