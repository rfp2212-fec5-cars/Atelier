const express = require('express');
const router = express.Router();
const products = require('./Controllers/Products.js');
// const overview = require('./Controllers/Overview.js');

//******PRODUCTS API******//
// default the product id = 1
router.get('/products', products.getAll);
router.get('/products/:productId', products.getOne);
router.get('/products/:productId/styles', products.getStyle);
router.get('/products/:productId/related', products.getRelated);
//**Overview**//
// router.get('/cart', overview.getCart);

module.exports = router;
