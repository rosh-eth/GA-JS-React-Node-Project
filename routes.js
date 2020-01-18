const express = require('express');
const router = express.Router();
const providerRoutes = require("./src/routes/provider.routes");
const AuthRouter = require('./src/routes/Auth.route');
const ApiRouter = require('./src/routes/Api.route');

router.use('/provider', providerRoutes);
router.use('/auth', AuthRouter);
router.use('/api', ApiRouter);

module.exports = router;
