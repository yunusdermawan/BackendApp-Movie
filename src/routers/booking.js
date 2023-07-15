const express = require('express');
const route = express.Router();
const ctrl = require('../controllers/booking');
const authCheck = require('../middleware/authCheck');

// Getting all booking data
route.get("/", authCheck, ctrl.getData);

// Adding a booking data
route.post("/add", authCheck, ctrl.saveData);

//Updating a booking data
route.put("/:id", authCheck, ctrl.updateData);

///////////////////////////////////////////DANGER///////////////////////////////////////
// Deleting a single booking by id
route.delete("/:id", authCheck, ctrl.deleteDataById);




module.exports = route;