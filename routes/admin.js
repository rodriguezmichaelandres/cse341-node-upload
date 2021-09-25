const path = require('path');

const express = require('express');

const roodDir = require('../util/path');

const router = express.Router();

const products = [];

// admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(roodDir, 'views', 'add-product.html'))
});

// admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    products.push({tittle: req.body.tittle, author: req.body.author, price: req.body.price, description: req.body.description, rating: req.body.rating});
    res.redirect('/');    
});


exports.routes = router;
exports.products = products;