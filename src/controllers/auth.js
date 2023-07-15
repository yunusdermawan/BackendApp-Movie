const ctrl = {};
const model = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('../utils/jwt');

// User login
ctrl.Login = async (req, res) => {
    try {
        
        const passDB = await model.getByUser(req.body.username);
        //const passDB = await model.getPassword(req.body.username);

        if(passDB.length <= 0) {
            return res.status(401).json('Username tidak terdaftar');
        }

        const passUser = req.body.password;
        const check = await bcrypt.compare(passUser, passDB[0].user_password)

        if(check) {
            const token = jwt.genToken(req.body.username);
            return res.status(200).json({"token" : token, "message" : 'Successfully logged in'});
        } else {
            return res.status(401).json('Wrong password');
        }

    } catch(error) {
        res.status(400).json('Error : ' + error);
    }
};


module.exports = ctrl;