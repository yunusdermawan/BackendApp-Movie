const express = require('express');
const route = express.Router();



const movies = require('./movies');
const schedule = require('./schedule');
const booking = require('./booking');
const users = require('./users');
const genre = require('./genre');
const auth = require('./auth');


route.use('/movie', movies);
route.use('/schedule', schedule);
route.use('/booking', booking);
route.use('/users', users);
route.use('/genre', genre);
route.use('/auth', auth);



module.exports = route;