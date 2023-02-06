const axios = require('axios');
const config = require('../config.js');


module.exports = {
  getMeta: (id)=>{
    let options = {
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta',
      headers: {
        Authorization: `${config.TOKEN}`,
      },
      params: {
        'product_id': `${id}`
      }
    };
    return axios(options);

  },
  getAll: (id, page, count)=>{
    //console.log('page', page);
    let options = {
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews',
      headers: {
        Authorization: `${config.TOKEN}`,
      },
      params: {
        'page': page,
        'count': count,
        'sort': 'helpful',
        'product_id': `${id}`,
      }
    };
    return axios(options);

  },
  create: (params)=>{
    let options = {
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews',
      headers: {
        Authorization: `${config.TOKEN}`,
      },
      method: 'post',
      data: params
    };
    console.log('create options ', options);
    return axios(options);
  },
  helpful: (reviewId)=>{
    let options = {
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/${reviewId}/helpful`,
      headers: {
        Authorization: `${config.TOKEN}`,
      },
      method: 'put',
    };
    return axios(options);

  },
  report: (reviewId)=>{
    let options = {
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/${reviewId}/report`,
      headers: {
        Authorization: `${config.TOKEN}`,
      },
      method: 'put',
    };
    return axios(options);
  }
};