const express = require('express');
const route = express.Router();
const ctrl = require('../controllers/genre');
const authCheck = require('../middleware/authCheck');

// Getting all movies
// route.get("/", authCheck, ctrl.getData);
route.get("/", ctrl.getData);




module.exports = route;