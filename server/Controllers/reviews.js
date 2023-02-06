const models = require('../Models/Reviews.js');

module.exports = {
  getMeta: (req, res) => {
    models.getMeta(req.query.product_id)
      .then((result)=>{
        res.send(result.data);
      })
      .catch((err)=>{
        res.status(404).send();
      });
  },
  getAll: (req, res) => {
    //req.query page count product_id
    models.getAll(req.query.product_id, req.query.page, req.query.count)
      .then((result)=>{
        res.send(result.data);
      })
      .catch((err)=>{
        res.status(404).send();
      });

  },
  create: (req, res) => {
    // console.log('req query', req.query);
    // console.log('req params', req.params);
    // console.log('req body', req.body);
    models.create(req.body)
      .then((result)=>{
        //console.log('success and result', result.data);
        res.send(result.data);
      })
      .catch((err)=>{
        console.log('err', err.message);
        res.status(404).send();
      });

  },
  helpful: (req, res) => {
    models.helpful(req.params.review_id)
      .then((result)=>{
        res.send(result.data);
      })
      .catch((err)=>{
        res.status(404).send();
      });

  },
  report: (req, res) => {
    models.report(req.params.review_id)
      .then((result)=>{
        res.send(result.data);
      })
      .catch((err)=>{
        res.status(404).send();
      });

  }
};