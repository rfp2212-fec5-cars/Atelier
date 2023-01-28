const express = require('express');
const router = express.Router();
const products = require('./Controllers/Products.js');
const reviews = require('./Controllers/Reviews.js');
const qa = require('./Controllers/QA.js');
// const overview = require('./Controllers/Overview.js');

//******PRODUCTS API******//
// default the product id = 1
router.get('/products', products.getAll);
router.get('/products/:productId', products.getOne);
router.get('/products/:productId/styles', products.getStyle);
router.get('/products/:productId/related', products.getRelated);
//**Overview**//
// router.get('/cart', overview.getCart);

//qa
router.get('/qa/questions', qa.getQuestions);
router.get('/qa/questions/:question_id/answers', qa.getAnswers);
router.post('/qa/questions', qa.addQuestion);
router.post('/qa/questions/:question_id/answers', qa.addAnswer);
router.put('/qa/questions/:question_id/helpful', qa.likeQuestion);
router.put('/qa/questions/:question_id/report', qa.reportQuestion);
router.put('/qa/answers/:answer_id/helpful', qa.likeAnswer);
router.put('/qa/answers/:answer_id/report', qa.reportAnswer);



//reviews
router.get('/reviews/meta', reviews.getMeta);
router.get('/reviews', reviews.getAll);
router.post('/reviews', reviews.create);
router.put('/reviews/:review_id/helpful', reviews.helpful);
router.put('/reviews/:review_id/report', reviews.report);

module.exports = router;
