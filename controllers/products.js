const products = require('../data/products');

//get all products
const listProducts = (req, res) => {
  return res.json(products);
}

//get one product with id
const showProduct = (req, res) => {
  let find = products.find(product => product._id === parseInt(req.params.id));
  return res.json(find);
}

//post product
const createProduct = (req, res) => {
  let counter = products.length + 1;
  let newProduct = req.body;
  newProduct._id = counter;
  newProduct.postId = 1;
  products.push(newProduct);
  return res.json(products);
}

module.exports = { listProducts, showProduct, createProduct }