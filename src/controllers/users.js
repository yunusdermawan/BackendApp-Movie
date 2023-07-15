const ctrl = {};
const model = require('../models/users');
const hash = require('../utils/hash');

// Getting all users
ctrl.getData = async (req, res) => {
    try {
        const result = await model.getAllUsers();
        //return res.status(200).json(result);
        return res.status(200).json(result);
    } catch(error) {
        res.status(400).json('Error : ' + error);
    }
};

// Getting data by username
ctrl.getByUser = async (req, res) => {
    try {
        const username = req.body.username;
        const result = await model.getByUser(username);
        //return res.status(200).json(result);
        return res.status(200).json(result);
    } catch(error) {
        res.status(400).json('Error : ' + error);
    }
};

// Getting data by username
ctrl.getByMail = async (req, res) => {
    try {
        const email = req.body.email;
        const result = await model.getByMail(email);
        //return res.status(200).json(result);
        return res.status(200).json(result);
    } catch(error) {
        res.status(400).json('Error : ' + error);
    }
};

// Adding a data
ctrl.saveData = async (req, res) => {
    try {
        //const hashPassword = await hash(req.body.password);
        // const params = {
        //     ...req.body,
        //     user_password: hashPassword
        // }
        const {
            firstname,
            lastname,
            phone_no,
            email,
            user_password,
            username,
            user_role
        } = req.body;
        const hashPassword = await hash(user_password);
        //const data = req.body;
        //console.log(hashPassword);
        const result = await model.addUser(
            {
            firstname,
            lastname,
            phone_no,
            email,
            hashPassword,
            username,
            user_role
        });
        //return res.status(200).json(result);
        const created = '1 user added';
        return res.status(200).json(created);
    } catch(error) {
        res.status(400).json('Error : ' + error);
    }
};

// Updating a data
ctrl.updateData = async (req, res) => {
    try {
        const user_id = parseInt(req.params.id)
        //console.log(user_id);
        const {
            firstname,
            lastname,
            phone_no,
            email,
            user_password,
            username
        } = req.body;
        // const upd = req.body;
        //return console.log(typeof(release_date));
        const result = await model.updateUser({
            firstname,
            lastname,
            phone_no,
            email,
            user_password,
            username,
            user_id
        });
        //return res.status(200).json(result);
        const updated = '1 user updated';
        return res.status(200).json(updated);
    } catch(error) {
        res.status(400).json('Error : ' + error);
    }
};

////////////////////////////////////////DANGER///////////////////////////////
// Deleting a single user by user_id
ctrl.deleteDataById = async (req, res) => {  
    try {
        const user_id = parseInt(req.params.id);
        //console.log(user_id);
        const result = await model.deleteUser(user_id);
        //return res.status(200).json(result);
        const deleted = '1 user deleted';
        return res.status(200).json(deleted);
    } catch(error) {
        res.status(400).json('Error : ' + error);
    }
};




module.exports = ctrl;