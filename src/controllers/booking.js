const ctrl = {};
const model = require('../models/booking');

// Getting all booking data
ctrl.getData = async (req, res) => {
    try {
        const result = await model.getAllBookings();
        //return res.status(200).json(result);
        return res.status(200).json(result);
    } catch(error) {
        res.status(400).json('Error : ' + error);
    }
};

// Adding a data
ctrl.saveData = async (req, res) => {
    try {
        const {
            movie_name,
            seat_no,
            selected_date,
            firstname,
            lastname,
            phone_no,
            email,
            total_payment,
            payment_method
        } = req.body;
        //const data = req.body;
        //return console.log(movie_name);
        const result = await model.addBooking(
            {
            movie_name,
            seat_no,
            selected_date,
            firstname,
            lastname,
            phone_no,
            email,
            total_payment,
            payment_method
        });
        //return res.status(200).json(result);
        const created = '1 booking added';
        return res.status(200).json(created);
    } catch(error) {
        res.status(400).json('Error : ' + error);
    }
};

// Updating a data
ctrl.updateData = async (req, res) => {
    try {
        const booking_id = parseInt(req.params.id)
        //console.log(booking_id);
        const {
            movie_name,
            seat_no,
            selected_date,
            firstname,
            lastname,
            phone_no,
            email,
            total_payment,
            payment_method
        } = req.body;
        // const upd = req.body;
        //return console.log(typeof(release_date));
        const result = await model.updateBooking({
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
        });
        //return res.status(200).json(result);
        const updated = '1 booking updated';
        return res.status(200).json(updated);
    } catch(error) {
        res.status(400).json('Error : ' + error);
    }
};

////////////////////////////////////////DANGER///////////////////////////////
// Deleting a single schedule by booking_id
ctrl.deleteDataById = async (req, res) => {  
    try {
        const booking_id = parseInt(req.params.id);
        //console.log(booking_id);
        const result = await model.deleteBooking(booking_id);
        //return res.status(200).json(result);
        const deleted = '1 booking deleted';
        return res.status(200).json(deleted);
    } catch(error) {
        res.status(400).json('Error : ' + error);
    }
};




module.exports = ctrl;