const jwt = require('jsonwebtoken');
const key = require('../utils/key');


module.exports = {
    genToken: (data) => {
        const payload = {
            data: data,
            role: "admin"
        }

        const token = jwt.sign(payload, key, {expiresIn: '600s'});

        return token;
    }
}