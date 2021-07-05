const express = require('express');
const router = express.Router();

const authRoutes = require('./auth');
// const sellersRoutes = require('./seller');

router.use('/auth', authRoutes);

// router.use('/sellers', sellersRoutes);

module.exports = router;
