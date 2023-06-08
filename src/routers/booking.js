const express = require('express');
const route = express.Router();
const ctrl = require('../controllers/booking');

// Getting all booking data
route.get("/", ctrl.getData);

// Adding a booking data
route.post("/add", ctrl.saveData);
// route.post("/add", () => {
//     console.log("Success");
// });

//Updating a booking data
route.put("/:id", ctrl.updateData);

///////////////////////////////////////////DANGER///////////////////////////////////////
// Deleting a single booking by id
route.delete("/:id", ctrl.deleteDataById);




module.exports = route;