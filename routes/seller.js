const express = require('express');
const router = express.Router();
const multer = require('multer');

const sellerController = require('../controllers/seller');
const validations = require('../validations/seller');
const authenticate = require('../middlewares/authenticate');
const { storage, fileFilter } = require('../config/multer');

const upload = multer({ storage: storage, fileFilter: fileFilter });

router.post(
    '/products',
    authenticate,
    upload.single('image'),
    validations.checkUploadFile,
    validations.checkCreateProduct,
    validations.handleValidation,
    sellerController.postCreateProduct
);

router.get('/products', authenticate, sellerController.getProducts);

module.exports = router;
