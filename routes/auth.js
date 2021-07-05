const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth');
const validations = require('../validations/auth');

router.post(
    '/signup',
    validations.checkSignUp,
    validations.handleValidation,
    authController.postCreateUser
);

module.exports = router;
