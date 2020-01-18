const express = require('express');
const session = require('express-session');
const AuthRouter = express.Router();
const bcrypt = require('bcryptjs');
const UserModel = require('../models/User.model');

// JSON parsing middleware
AuthRouter.use(express.json());

// MIDDLEWARE
AuthRouter.post('/new', async (req, res) => {
    //create new user logic here
    const salt = "$2a$10$5Cm7bg8L7QoRygjkStQsBe";
    //const newSalt = bcrypt.genSaltSync(10);

    req.body.password = bcrypt.hashSync(req.body.password, salt);
    req.body.token = bcrypt.hashSync(req.body.token, salt);

    const user = await UserModel.create(req.body);

    res.json({ status: "User Created", id: user.id})
})

AuthRouter.get('/login', async (req, res) => {
    //login logic here
    // check from authheader
    if (!req.headers.authorization) {
        res.status(400).json();
        return;
    }

    // extract user details from request

    const [authType, userPass] = req.headers.authorization.split(" ");
    const salt = "$2a$10$5Cm7bg8L7QoRygjkStQsBe";
    let user = null;

    switch (authType) {
        case "Basic":
            const userPassDecoded = Buffer.from(userPass, 'base64').toString();
            const [userName, userPassword] = userPassDecoded.split(":");
            const passHash = bcrypt.hashSync(userPassword, salt);
            user = await UserModel.findOne({login: userName, password: passHash});

            break;

        case "Bearer":
            // check DB for token
            
            const tokenHash = bcrypt.hashSync(userPass, salt);
            user = await UserModel.findOne({token: tokenHash});
            break;
    }

    if (!user) {
        res.send(404).json({status: "user not found or invalid password"});
        return;
    }

    req.session.user = user;
        
    res.json(user);


    // check database if user exists
})

AuthRouter.get('/logout', (req, res) => {
    //login logic here
    req.session.destroy();
    res.json({ status: "logout route" })
})

module.exports = AuthRouter;