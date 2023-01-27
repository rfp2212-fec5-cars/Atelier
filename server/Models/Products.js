const axios = require('axios');
const config = require('../config.js');

module.exports = {
  getAllProducts: () => {
    let options = {
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products',
      headers: {
        Authorization: `${config.TOKEN}`,
      },
    };
    return axios(options);
  },

  getOneProduct: (id) => {
    let options = {
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}`,
      headers: {
        Authorization: `${config.TOKEN}`,
      },
    };
    return axios(options);
  },

  getProductStyle: (id) => {
    let options = {
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}/styles`,
      headers: {
        Authorization: `${config.TOKEN}`,
      },
    };
    return axios(options);
  },
  getProductRelated: (id) => {
    let options = {
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}/related`,
      headers: {
        Authorization: `${config.TOKEN}`,
      },
    };
    return axios(options);
  },
};
