const db = require('../config/db');
const model = {};

// Get all genres from db
model.getAllGenres = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM public.genre ORDER BY genre_id ASC')
        .then(res => {
            resolve(res.rows);
        })
        .catch((er) => {
            reject(er.message);
        });
    });
};


module.exports = model;