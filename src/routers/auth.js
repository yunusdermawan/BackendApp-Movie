const express = require('express');
const route = express.Router();
const ctrl = require('../controllers/auth');


// Adding a user
route.post("/", ctrl.Login);





module.exports = route;