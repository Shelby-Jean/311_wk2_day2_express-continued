const express = require('express');
const products = require('../data/products');
const bodyParser = require('body-parser');
const router = express.Router();
const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());

//get all products
app.get('/products', (req, res) => {
  res.json(products);
});

//get one product with id
app.get('/products/:id', (req, res) => {
  let find = products.find(product => product._id === parseInt(req.params.id));
  res.json(find);
});

//post product
app.post('/products', (req, res) => {
  let counter = products.length + 1;
  let newProduct = req.body;
  newProduct._id = counter;
  newProduct.postId = 1;
  products.push(newProduct);
  res.json(products);
});


module.exports = router;