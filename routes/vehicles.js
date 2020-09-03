const express = require('express');
const vehicleController = require('../controllers/vehicles');
const router = express.Router();

//get all vehicles
router.get('/vehicles', vehicleController.listVehicles);

//get one vehicle with id
router.get('/vehicles/:id', vehicleController.showVehicle);

//post vehicle
router.post('/vehicles', vehicleController.createVehicle);


module.exports = router;
