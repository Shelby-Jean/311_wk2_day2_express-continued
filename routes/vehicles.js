const express = require('express');
const vehicles = require('../data/vehicles');
const bodyParser = require('body-parser');
const router = express.Router();
const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());

//get all vehicles
router.get('/vehicles', (req, res) => {
  res.json(vehicles);
});

//get one vehicle with id
router.get('/vehicles/:id', (req, res) => {
  let find = vehicles.find(vehicle => vehicle._id === parseInt(req.params.id));
  res.json(find);
});

//post vehicle
router.post('/vehicle', (req, res) => {
  let counter = vehicles.length + 1;
  let newVehicle = req.body;
  newVehicle._id = counter;
  newVehicle.postId = 1;
  vehicles.push(newVehicle);
  res.json(vehicles);
});


module.exports = router;
