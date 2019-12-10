const express = require('express');
const router = express.Router();
const providerRoutes = require("./src/routes/provider.routes");

router.use('/provider', providerRoutes);

module.exports = router;
