const { validationResult, body } = require('express-validator');

const User = require('../models/user');

exports.handleValidation = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(422).json({
            status: false,
            message: 'Validation error',
            errors: errors.array(),
        });
    next();
};

exports.checkSignUp = [
    body('fname', 'First Name is required').notEmpty().isString().bail().trim(),
    body('lname', 'Last Name is required').notEmpty().isString().bail().trim(),
    body('email', 'Email is required')
        .notEmpty()
        .isString()
        .bail()
        .trim()
        .normalizeEmail()
        .isEmail()
        .withMessage('Email is invalid')
        .bail()
        .custom(async (value) => {
            const user = await User.findOne({ email: value });
            if (user) return Promise.reject('User already exists');

            return true;
        }),
    body('password', 'Password is required')
        .notEmpty()
        .isString()
        .bail()
        .trim()
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long')
        .not()
        .isIn(['000000', '123456', '654321'])
        .withMessage('Password must not equal to 000000/123456/6543221'),
];
