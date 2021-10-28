const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/add-product', (req, red, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
 });

 // /admin/add-product => POST
router.post('/product', (req, res, next) =>{
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;