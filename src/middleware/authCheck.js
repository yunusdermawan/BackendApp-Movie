const ctrl = {};
const jwt = require('jsonwebtoken');
const key = require('../utils/key')

const check = (req, res, next) => {
    const { authorization } = req.headers;

    if(!authorization) {
        return res.status(401).json('Please login');
    }

    const token = authorization.replace("Bearer ", "");
    jwt.verify(token, key, (err, decode) => {
        if(err) {
            return res.status(401).json(err);
        }

        // Checking if role is admin
        if(decode.role == 'admin') {
            req.user = decode.data;
        return next();
        } else {
            return res.status(401).json('You don\'t have an access for this priviledge');
        }

        
    })
}

module.exports = check;