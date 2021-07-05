const { validationResult, body } = require('express-validator');
const dayjs = require('dayjs');

const { deleteFile } = require('../config/multer');

exports.handleValidation = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        if (req.file) deleteFile(req.file.path);

        return res.status(422).json({
            status: false,
            message: 'Validation error',
            errors: errors.array(),
        });
    }
    next();
};

exports.checkUploadFile = (req, res, next) => {
    if (!req.file)
        return res.status(422).json({
            status: false,
            message: 'Product image not found',
        });

    next();
};

exports.checkCreateProduct = [
    body('name', 'Name is required').notEmpty().bail().isString().bail().escape(),
    body('description', 'Description is required')
        .notEmpty()
        .bail()
        .isString()
        .bail()
        .escape(),
    body('date', 'Manufacturing Date is required')
        .notEmpty()
        .bail()
        .isString()
        .bail()
        .customSanitizer((value) => dayjs(value, 'YYYY-MM-DD'))
        .custom((value) => {
            if (!value.isValid()) return Promise.reject('Must be a valid date');

            const date = dayjs().diff(value, 'days');
            if (date < 0) return Promise.reject('Manufacturing date must be in the past');

            return true;
        }),
    body('category', 'Category is required').notEmpty().bail().isString().bail(),
    body('price', 'Price is required').notEmpty().bail().isNumeric().bail().toFloat(),
];
