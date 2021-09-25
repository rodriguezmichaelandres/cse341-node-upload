const path = require('path');

const express = require('express');
const router = express.Router();
const roodDir = require('../util/path');
const adminData = require('./admin');
router.get('/', (req, res, next) => {
    //console.log('shop.js', adminData.products);
    //res.sendFile(path.join(roodDir, 'views', 'shop.html'));
    const products = adminData.products;
    res.render('shop', {prods: products, docTittle: 'Shop'}); 
});




module.exports = router;