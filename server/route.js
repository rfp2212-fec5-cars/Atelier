const express = require('express');
const router = express.Router();
const products = require('./Controllers/Products.js');
const reviews = require('./Controllers/Reviews.js');
const cart = require('./Controllers/Overview.js');

//******PRODUCTS API******//
// default the product id = 1
router.get('/products', products.getAll);
router.get('/products/:productId', products.getOne);
router.get('/products/:productId/styles', products.getStyle);
router.get('/products/:productId/related', products.getRelated);

//******CART API******//
router.get('/cart', cart.getCart);
router.post('/cart', cart.postCart);



//reviews
router.get('/reviews/meta', reviews.getMeta);
router.get('/reviews', reviews.getAll);
router.post('/reviews', reviews.create);
router.put('/reviews/:review_id/helpful', reviews.helpful);
router.put('/reviews/:review_id/report', reviews.report);

module.exports = router;
