const express = require('express');
const bodyParser = require('body-parser');
const contacts = require('./data/contacts');
const vehicles = require('./data/vehicles');
const comments = require('./data/comments');
const products = require('./data/products');
const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());

const port = process.env.PORT || 4001;


//CONTACTS
//get all contacts
app.get('/contacts', (req, res) => {
  res.json(contacts);
});

//get one contact with id
app.get('/contacts/:id', (req, res) => {
  let find = contacts.find(contact => contact._id === parseInt(req.params.id));
  res.json(find);
});

//post contact
app.post('/contacts', (req, res) => {
  let counter = contacts.length + 1;
  let newContact = req.body;
  newContact._id = counter;
  newContact.postId = 1;
  contacts.push(newContact);
  res.json(contacts);
});


//VEHICLES
//get all vehicles
app.get('/vehicles', (req, res) => {
  res.json(vehicles);
});

//get one vehicle with id
app.get('/vehicles/:id', (req, res) => {
  let find = vehicles.find(vehicle => vehicle._id === parseInt(req.params.id));
  res.json(find);
});

//post vehicle
app.post('/vehicle', (req, res) => {
  let counter = vehicles.length + 1;
  let newVehicle = req.body;
  newVehicle._id = counter;
  newVehicle.postId = 1;
  vehicles.push(newVehicle);
  res.json(vehicles);
});


//COMMENTS
//get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

//get one comment with id
app.get('/comments/:id', (req, res) => {
  let find = comments.find(comment => comment._id === parseInt(req.params.id));
  res.json(find);
});

//post comment
app.post('/comments', (req, res) => {
  let counter = comments.length + 1;
  let newComment = req.body;
  newComment._id = counter;
  newComment.postId = 1;
  comments.push(newComment);
  res.json(comments);
});


//PRODUCTS
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


app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
