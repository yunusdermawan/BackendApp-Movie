const ctrl = {};
const model = require('../models/genre');

// Getting all genres
ctrl.getData = async (req, res) => {
    try {
        const result = await model.getAllGenres();
        //return res.status(200).json(result);
        return res.status(200).json(result);
    } catch(error) {
        res.status(400).json('Error : ' + error);
    }
};



module.exports = ctrl;