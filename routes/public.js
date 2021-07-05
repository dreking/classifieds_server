const express = require('express');
const router = express.Router();

const publicController = require('../controllers/public');

router.get('/products', publicController.getAllProducts);

module.exports = router;
