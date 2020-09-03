const express = require('express');
const contactController = require('../controllers/contacts');
const router = express.Router();

//get all contacts
router.get('/contacts', contactController.listContacts);

//get one contact with id
router.get('/contacts/:id', contactController.showContact);

//post contact
router.post('/contacts', contactController.createContact);


module.exports = router;