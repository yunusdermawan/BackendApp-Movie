const db = require('../config/db');
const model = {};

// Get all users from db
model.getAllUsers = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM public.users ORDER BY user_id ASC')
        .then(res => {
            resolve(res.rows);
        })
        .catch((er) => {
            reject(er.message);
        });
    });
};

// Get a single user from db based on username
model.getByUser = (username) => {
    //console.log(name);
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM public.users WHERE username = $1', [username])
        .then(res => {
            resolve(res.rows);
        })
        .catch((er) => {
            reject(er.message);
        });
    });
};

// Get a single user from db based on email
model.getByMail = (email) => {
    //console.log(name);
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM public.users WHERE email = $1', [email])
        .then(res => {
            resolve(res.rows);
        })
        .catch((er) => {
            reject(er.message);
        });
    });
};

// Get pasword
model.getPassword = (username) => {
    //console.log(name);
    return new Promise((resolve, reject) => {
        db.query('SELECT "user_password" FROM public.users WHERE username = $1', [username])
        .then(res => {
            if(res.rows.length) {
              resolve(res.rows[0].user_password)  
            }
            resolve(res.rows.length)
        })
        .catch((er) => {
            reject(er.message);
        });
    });
};



// Add a user to db
model.addUser = ({
    firstname,
    lastname,
    phone_no,
    email,
    hashPassword,
    username,
    user_role
}) => {
    return new Promise((resolve, reject) => {
        db.query("INSERT INTO public.users (firstname, lastname, phone_no, email, user_password, username, user_role) VALUES ($1, $2, $3, $4, $5, $6, $7)", [
            firstname,
            lastname,
            phone_no,
            email,
            hashPassword,
            username,
            user_role
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

// Update a user to db
model.updateUser = ({
    firstname,
    lastname,
    phone_no,
    email,
    user_password,
    username,
    user_id
}) => {
    return new Promise((resolve, reject) => {
        //return console.log(typeof(category));
        db.query("UPDATE public.users SET firstname = $1, lastname = $2, phone_no = $3, email = $4, user_password = $5, username = $6 WHERE user_id = $7", [
            firstname,
            lastname,
            phone_no,
            email,
            user_password,
            username,
            user_id
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
//Deleting a single user from db based on movie_id
model.deleteUser = (user_id) => {
    //console.log(user_id);
    return new Promise((resolve, reject) => {
        db.query('DELETE FROM public.users WHERE user_id = $1', [user_id])
        .then(res => {
            resolve(res.rows);
        })
        .catch((er) => {
            reject(er.message);
        });
    });
};


module.exports = model;