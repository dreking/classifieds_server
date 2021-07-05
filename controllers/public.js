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
