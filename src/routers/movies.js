const express = require('express');
const route = express.Router();
const ctrl = require('../controllers/movies');
const authCheck = require('../middleware/authCheck');
const upload = require('../middleware/upload');

// Getting all movies
// route.get("/", authCheck, ctrl.getData);
route.get("/", ctrl.getData);

// Getting all movies by movie_name
route.get("/name", ctrl.getDataByName);

// Getting data with pagination
route.get("/items", ctrl.getPaginatedData);

// Getting all movies and sort
route.get("/sort", ctrl.getAndSort);



// Getting a single movie by movie_id
route.get("/:something", ctrl.getDataById);

// Adding a movie => 
// route.post("/add", authCheck, upload.single('image'), ctrl.saveData);
route.post("/add", upload.single('image'), ctrl.saveData);

//Updating a movie
route.put("/:id", ctrl.updateData);

///////////////////////////////////////////DANGER///////////////////////////////////////
// Deleting a single movie by id
route.delete("/:id", ctrl.deleteDataById);




module.exports = route;