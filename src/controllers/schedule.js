const ctrl = {};
const model = require('../models/schedule');

// Getting all schedules
ctrl.getData = async (req, res) => {
    try {
        const result = await model.getAllSchedules(req.user);
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
            price,
            date_start,
            date_end,
            time,
        } = req.body;
        //const data = req.body;
        //return console.log(movie_name);
        const result = await model.addSchedule(
            {
            movie_name,
            price,
            date_start,
            date_end,
            time,
        });
        //return res.status(200).json(result);
        const created = '1 schedule added';
        return res.status(200).json(created);
    } catch(error) {
        res.status(400).json('Error : ' + error);
    }
};

// Updating a data
ctrl.updateData = async (req, res) => {
    try {
        const schedule_id = parseInt(req.params.id)
        //console.log(schedule_id);
        const {
            movie_name,
            price,
            date_start,
            date_end,
            time,
        } = req.body;
        // const upd = req.body;
        //return console.log(typeof(release_date));
        const result = await model.updateSchedule({
            movie_name,
            price,
            date_start,
            date_end,
            time,
            schedule_id
        });
        //return res.status(200).json(result);
        const updated = '1 schedule updated';
        return res.status(200).json(updated);
    } catch(error) {
        res.status(400).json('Error : ' + error);
    }
};

////////////////////////////////////////DANGER///////////////////////////////
// Deleting a single schedule by schedule_id
ctrl.deleteDataById = async (req, res) => {  
    try {
        const schedule_id = parseInt(req.params.id);
        //console.log(schedule_id);
        const result = await model.deleteSchedule(req.user);
        //return res.status(200).json(result);
        const deleted = '1 schedule deleted';
        return res.status(200).json(deleted);
    } catch(error) {
        res.status(400).json('Error : ' + error);
    }
};




module.exports = ctrl;