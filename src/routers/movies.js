const express = require('express');
const route = express.Router();
const ctrl = require('../controllers/movies');

// Getting all movies
route.get("/", ctrl.getData);

// Getting all movies by movie_name
route.get("/name", ctrl.getDataByName);
// route.get("/name", () => {
//     console.log('Success');
// });

// Getting a single movie by movie_id
route.get("/:id", ctrl.getDataById);

// Getting all movies and sort
//route.get("/sort:sort", ctrl.getAndSort);
route.get("/sorted", () => {
    console.log('Success');
});

// Adding a product
route.post("/add", ctrl.saveData);

//Updating a product
route.put("/:id", ctrl.updateData);

///////////////////////////////////////////DANGER///////////////////////////////////////
// Getting a single product ny id
route.delete("/:id", ctrl.deleteDataById);




module.exports = route;