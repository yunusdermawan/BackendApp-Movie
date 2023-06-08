const express = require('express');
const route = express.Router();
const ctrl = require('../controllers/schedule');

// Getting all movies
route.get("/", ctrl.getData);

// Adding a product
route.post("/add", ctrl.saveData);
// route.post("/add", () => {
//     console.log("Success");
// });

//Updating a product
route.put("/:id", ctrl.updateData);

///////////////////////////////////////////DANGER///////////////////////////////////////
// Getting a single product ny id
route.delete("/:id", ctrl.deleteDataById);




module.exports = route;