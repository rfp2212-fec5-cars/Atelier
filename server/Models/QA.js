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

  addQuestion: (body, name, email, product_id) => {
    var options = {
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions',
      headers: {
        Authorization: TOKEN
      },
      data: { body, name, email, product_id },
      method: 'POST'
    }

    return axios(options);
  },

  addAnswer: (question_id, body, name, email, photos) => {
    var options = {
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${question_id}/answers`,
      headers: {
        Authorization: TOKEN
      },
      data: { body, name, email, photos },
      method: 'POST'
    }

    return axios(options);
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

  likeAnswer: (answer_id) => {
    var options = {
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/answers/${answer_id}/helpful`,
      headers: {
        Authorization: TOKEN,
      },
      params: { answer_id },
      method: 'PUT'
    }

    return axios(options);
  },

  reportAnswer: (answer_id) => {
    var options = {
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/answers/${answer_id}/report`,
      headers: {
        Authorization: TOKEN,
      },
      params: { answer_id },
      method: 'PUT'
    }

    return axios(options);
  }
}