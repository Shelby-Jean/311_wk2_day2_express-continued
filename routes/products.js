const express = require('express');
const productController = require('../controllers/products');
const { Router } = require('express');
const router = express.Router();

//get all products
router.get('/products', productController.listProducts);

//get one product with id
router.get('/products/:id', productController.showProduct);

//post product
router.post('/products', productController.createProduct);


module.exports = router;