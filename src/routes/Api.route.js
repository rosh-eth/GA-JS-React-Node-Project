const express = require('express');
const ApiRouter = express.Router();

// JSON parsing middlware
ApiRouter.use(express.json());

ApiRouter.use((req, res, next) => {
    if(!req.session.user) {
        return res.status(403).json({status: "auth required"});
    }
    next();
})

ApiRouter.get('/hello', (req, res) => {
    res.json(req.session.user);
});

module.exports = ApiRouter;