const { Types } = require('mongoose');
const Product = require('../models/product');

exports.getAllProducts = async (req, res) => {
    const products = await Product.find().limit(10);

    return res.status(200).json({
        status: true,
        message: 'Products',
        products: products,
    });
};

exports.getCategories = (req, res) => {
    const categories = require('../data/categories.json');

    return res.status(200).json({
        status: true,
        message: 'Categories found',
        categories: categories,
    });
};

exports.getProductById = async (req, res) => {
    const { id } = req.params;

    if (!Types.ObjectId.isValid(id))
        return res.status(404).json({ status: true, message: 'Product not found' });

    const product = await Product.findById(id);
    if (!product)
        return res.status(404).json({ status: true, message: 'Product not found' });

    return res.status(200).json({
        status: true,
        message: 'Product found',
        product: product,
    });
};
