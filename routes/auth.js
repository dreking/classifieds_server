const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth');
const validations = require('../validations/auth');

router.post(
    '/signup',
    validations.checkSignUp,
    validations.handleValidation,
    authController.postSignUp
);

router.post(
    '/signin',
    validations.checkSignIn,
    validations.handleValidation,
    authController.postSignIn
);

module.exports = router;
