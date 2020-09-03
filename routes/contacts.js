const express = require('express');
const contacts = require('../data/contacts');
const bodyParser = require('body-parser');
const router = express.Router();
const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());

//get all contacts
router.get('/contacts', (req, res) => {
  res.json(contacts);
});

//get one contact with id
router.get('/contacts/:id', (req, res) => {
  let find = contacts.find(contact => contact._id === parseInt(req.params.id));
  res.json(find);
});

//post contact
router.post('/contacts', (req, res) => {
  let counter = contacts.length + 1;
  let newContact = req.body;
  newContact._id = counter;
  newContact.postId = 1;
  contacts.push(newContact);
  res.json(contacts);
});


module.exports = router;