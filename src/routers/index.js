const express = require('express');
const route = express.Router();

const movies = require('./movies');
const schedule = require('./schedule');
const booking = require('./booking');


route.use('/movie', movies);
route.use('/schedule', schedule);
route.use('/booking', booking);



module.exports = route;