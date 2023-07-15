const ctrl = {};
const model = require('../models/movies');
const upload = require('../utils/upload')

// Getting all movies
ctrl.getData = async (req, res) => {
    try {
        const result = await model.getAllMovies();
        //return res.status(200).json(result);
        return res.status(200).json(result);
    } catch(error) {
        res.status(400).json('Error : ' + error);
    }
};

// Getting data with pagination
ctrl.getPaginatedData = async (req, res) => {
    try {
        const params = {
            page: req.query.page || 1,
            limit: req.query.limit || 5
        }
        //console.log(params);
        const result = await model.getPaginatedMovies(params);
        //return res.status(200).json(result);
        return res.status(200).json(result);
    } catch(error) {
        res.status(400).json('Error : ' + error);
    }
};

// Getting all movies and sort based on movie_name or release_date
ctrl.getAndSort = async (req, res) => {
    try {
        const { sortBy } = req.query;
        //console.log(sortBy);
        const result = await model.getAndSort(sortBy);
        //return res.status(200).json(result);
        return res.status(200).json(result);
    } catch(error) {
        res.status(400).json('Error : ' + error);
    }
};

// Getting a single movie by movie_name
ctrl.getDataByName = async (req, res) => {
    try {
        const name = req.query;
        //console.log(name);
        const valName = name.movie_name;
        //console.log(valName);
        const result = await model.getMovieByName(valName);
        return res.status(200).json(result);
    } catch(error) {
        res.status(400).json('Error : ' + error);
    }
};

// Getting a single movie by movie_id
ctrl.getDataById = async (req, res) => {  
    try {
        const movie_id = parseInt(req.params.id);
        //console.log(movie_id);
        const result = await model.getMovieById(movie_id);
        return res.status(200).json(result);
    } catch(error) {
        res.status(400).json('Error : ' + error);
    }
};

// Adding a data
ctrl.saveData = async (req, res) => {
    try {
        //console.log(req.file);
        if (req.file !== undefined) {
            req.body.banner = await upload(req.file.path)
        }

        
        const {
            movie_name,
            director,
            release_date,
            category,
            casts,
            duration,
            banner
        } = req.body;
        //const data = req.body;
        //return console.log(movie_name);
        const result = await model.addMovie(
            {
            movie_name,
            director,
            release_date,
            category,
            casts,
            duration,
            banner
        });
        //return res.status(200).json(result);
        const created = '1 movie added';
        return res.status(200).json(created);
    } catch(error) {
        res.status(400).json('Error : ' + error);
    }
};

// Updating a data
ctrl.updateData = async (req, res) => {
    try {
        const movie_id = parseInt(req.params.id)
        
        const {
            movie_name,
            director,
            release_date,
            category,
            casts,
            duration,
            banner
        } = req.body;
        // const upd = req.body;
        //return console.log(typeof(release_date));
        const result = await model.updateMovie({
            movie_name,
            director,
            release_date,
            category,
            casts,
            duration,
            banner,
            movie_id
        });
        //return res.status(200).json(result);
        const updated = '1 movie updated';
        return res.status(200).json(updated);
    } catch(error) {
        res.status(400).json('Error : ' + error);
    }
};

////////////////////////////////////////DANGER///////////////////////////////
// Deleting a single movie by movie_id
ctrl.deleteDataById = async (req, res) => {  
    try {
        const movie_id = parseInt(req.params.id);
        const result = await model.deleteMovieById(movie_id);
        //return res.status(200).json(result);
        const deleted = '1 movie deleted';
        return res.status(200).json(deleted);
    } catch(error) {
        res.status(400).json('Error : ' + error);
    }
};




module.exports = ctrl;