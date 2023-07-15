const express = require('express');
const route = express.Router();
const ctrl = require('../controllers/users');
const authCheck = require('../middleware/authCheck');

// Getting all users
route.get("/", ctrl.getData);


// Getting data by username
route.get("/username", ctrl.getByUser);

// Getting data by mail
route.get("/email", ctrl.getByMail);

// Adding a user
route.post("/add", ctrl.saveData);

//Updating a user
route.put("/:id", ctrl.updateData);

///////////////////////////////////////////DANGER///////////////////////////////////////
// Getting a single user by id
route.delete("/:id", ctrl.deleteDataById);




module.exports = route;