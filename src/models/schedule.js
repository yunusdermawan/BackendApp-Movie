const db = require('../config/db');
const model = {};

// Get all schedule from db
model.getAllSchedules = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM public.schedule ORDER BY schedule_id ASC')
        .then(res => {
            resolve(res.rows);
        })
        .catch((er) => {
            reject(er.message);
        });
    });
};

// Add a schedule to db
model.addSchedule = ({
    movie_name,
    price,
    date_start,
    date_end,
    time,
}) => {
    return new Promise((resolve, reject) => {
        db.query("INSERT INTO public.schedule (movie_name, price, date_start, date_end, time) VALUES ($1, $2, $3, $4, $5)", [
            movie_name,
            price,
            date_start,
            date_end,
            time,
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

// Update a schedule to db
model.updateSchedule = ({
    movie_name,
    price,
    date_start,
    date_end,
    time,
    schedule_id
}) => {
    return new Promise((resolve, reject) => {
        //return console.log(typeof(category));
        db.query("UPDATE public.schedule SET movie_name = $1, price = $2, date_start = $3, date_end = $4, time = $5 WHERE schedule_id = $6", [
            movie_name,
            price,
            date_start,
            date_end,
            time,
            schedule_id
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
//Deleting a single schedule from db based on movie_id
model.deleteSchedule = (schedule_id) => {
    //console.log(schedule_id);
    return new Promise((resolve, reject) => {
        db.query('DELETE FROM public.schedule WHERE schedule_id = $1', [schedule_id])
        .then(res => {
            resolve(res.rows);
        })
        .catch((er) => {
            reject(er.message);
        });
    });
};


module.exports = model;