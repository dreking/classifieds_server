const express = require('express');
const router = express.Router();

const authRoutes = require('./auth');
const sellersRoutes = require('./seller');
const publicRoutes = require('./public');

router.use('/auth', authRoutes);

router.use('/seller', sellersRoutes);

router.use('/public', publicRoutes);

module.exports = router;
