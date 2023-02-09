
const axios = require('axios');
const config = require('../config.js');

module.exports = {
  getCart: () => {
    let options = {
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/cart',
      headers: {
        Authorization: `${config.TOKEN}`,
      },
    };
    return axios(options);
  },
  addItemToCart: (sku_id) => {
    let options = {
      method: 'post',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/cart',
      headers: {
        Authorization: `${config.TOKEN}`,
      },
      data: {sku_id}
    };
    return axios(options);
  },
  logInteraction: ({element, widget, time}) => {
    let options = {
      method: 'post',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/interactions',
      headers: {
        Authorization: `${config.TOKEN}`,
      },
      data: { element, widget, time }
    };

    return axios(options);
  }
};