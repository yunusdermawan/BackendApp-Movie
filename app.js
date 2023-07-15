const express = require('express');
const app = express();
const routers = require('./src/routers/index');
const db = require('./src/config/db');
const cors = require('cors')
const cloudinary = require('cloudinary').v2

app.use(
    cors({
        origin: 'http://localhost:3000',
    })
)

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(routers);


db.connect()
    .then(() => {
        cloudinary.config({
            cloud_name: 'dsfrrcvrs',
            api_key: '554933634147368',
            api_secret: 'dhVHQ_1QnUJ66EZvfEIHjZUI0jo'
        })

        app.listen(8000, () => {
            console.log('App running on port 8000');
        })
    })
    .catch((e) => {
        console.log(e);
})


