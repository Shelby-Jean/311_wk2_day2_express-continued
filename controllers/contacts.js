const contacts = require('../data/contacts');

//get all contacts
const listContacts = (req, res) => {
  return res.json(contacts);
};

//get one contact with id
const showContact = (req, res) => {
  let find = contacts.find(contact => contact._id === parseInt(req.params.id));
  return res.json(find);
}

//post contact
const createContact = (req, res) => {
  let counter = contacts.length + 1;
  let newContact = req.body;
  newContact._id = counter;
  newContact.postId = 1;
  contacts.push(newContact);
  return res.json(contacts);
}

module.exports = { listContacts, showContact, createContact }