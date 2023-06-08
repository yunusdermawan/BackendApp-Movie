const db = require('../config/db');
const model = {};

// Get all movies from db
model.getAllMovies = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM public.movie ORDER BY movie_id ASC')
        .then(res => {
            resolve(res.rows);
        })
        .catch((er) => {
            reject(er.message);
        });
    });
};

// Get all movies from db and sorted based on name or release date
model.getAndSort = (sortBy) => {
    return new Promise((resolve, reject) => {
        if(sortBy == 1) {
            db.query('SELECT * FROM public.movie ORDER BY movie_name ASC')
            .then(res => {
                resolve(res.rows);
            })
            .catch((er) => {
                reject(er.message);
            });
        } else if(sortBy == 2) {
            db.query('SELECT * FROM public.movie ORDER BY release_date ASC')
            .then(res => {
                resolve(res.rows);
            })
            .catch((er) => {
                reject(er.message);
            });
        }
        
    });
};

// Get a single movie from db based on movie_name
model.getMovieByName = (name) => {
    //console.log(name);
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM public.movie WHERE movie_name LIKE '%${name}%' `)
        .then(res => {
            resolve(res.rows);
        })
        .catch((er) => {
            reject(er.message);
        });
    });
};

//Get a single movie from db based on movie_id
model.getMovieById = (movie_id) => {
    //console.log(movie_id)
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM public.movie WHERE movie_id = $1 ', [movie_id])
        .then(res => {
            resolve(res.rows);
        })
        .catch((er) => {
            reject(er.message);
        });
    });
};

// Add a movie to db
model.addMovie = ({
    movie_name,
    director,
    release_date,
    category,
    casts,
    duration
}) => {
    return new Promise((resolve, reject) => {
        db.query("INSERT INTO public.movie (movie_name, director, release_date, category, casts, duration) VALUES ($1, $2, $3, $4, $5, $6)", [
            movie_name,
            director,
            release_date,
            category,
            casts,
            duration
        ])
        .then(res => {
            //const success = console.log("Success!");
            resolve(res.rowCount);
        })
        .catch((er) => {
            reject(er.message);
        });
    });
};

// Update a movie to db
model.updateMovie = ({
    movie_name,
    director,
    release_date,
    category,
    casts,
    duration,
    movie_id
}) => {
    return new Promise((resolve, reject) => {
        //return console.log(typeof(category));
        db.query("UPDATE public.movie SET movie_name = $1, director = $2, release_date = $3, category = $4, casts = $5, duration = $6 WHERE movie_id = $7", [
            movie_name,
            director,
            release_date,
            category,
            casts,
            duration,
            movie_id
        ])
        .then(res => {
            resolve(res.rows);
        })
        .catch((er) => {
            reject(er.message);
        });
    });
};

//////////////////DANGER///////////////
//Get a single movie from db based on movie_id
model.deleteMovieById = (movie_id) => {

    return new Promise((resolve, reject) => {
        db.query('DELETE FROM public.movie WHERE movie_id = $1', [movie_id])
        .then(res => {
            resolve(res.rows);
        })
        .catch((er) => {
            reject(er.message);
        });
    });
};


module.exports = model;