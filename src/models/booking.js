const db = require('../config/db');
const model = {};

// Get all booking from db
model.getAllBookings = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM public.booking ORDER BY booking_id ASC')
        .then(res => {
            resolve(res.rows);
        })
        .catch((er) => {
            reject(er.message);
        });
    });
};

// Add a booking to db
model.addBooking = ({
    movie_name,
    seat_no,
    selected_date,
    firstname,
    lastname,
    phone_no,
    email,
    total_payment,
    payment_method
}) => {
    return new Promise((resolve, reject) => {
        db.query("INSERT INTO public.booking (movie_name, seat_no, selected_date, firstname, lastname, phone_no, email, total_payment, payment_method) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)", [
            movie_name,
            seat_no,
            selected_date,
            firstname,
            lastname,
            phone_no,
            email,
            total_payment,
            payment_method
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

// Update a booking to db
model.updateBooking = ({
    movie_name,
    seat_no,
    selected_date,
    firstname,
    lastname,
    phone_no,
    email,
    total_payment,
    payment_method,
    booking_id
}) => {
    return new Promise((resolve, reject) => {
        //return console.log(typeof(category));
        db.query("UPDATE public.booking SET movie_name = $1, seat_no = $2, selected_date = $3, firstname = $4, lastname = $5, phone_no = $6, email = $7, total_payment = $8, payment_method = $9 WHERE booking_id = $10", [
            movie_name,
            seat_no,
            selected_date,
            firstname,
            lastname,
            phone_no,
            email,
            total_payment,
            payment_method,
            booking_id
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
//Deleting a single booking from db based on booking_id
model.deleteBooking = (booking_id) => {
    //console.log(booking_id);
    return new Promise((resolve, reject) => {
        db.query('DELETE FROM public.booking WHERE booking_id = $1', [booking_id])
        .then(res => {
            resolve(res.rows);
        })
        .catch((er) => {
            reject(er.message);
        });
    });
};


module.exports = model;