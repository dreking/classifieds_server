const Product = require('../models/product');

exports.postCreateProduct = async (req, res) => {
    const { name, price, description, date, category } = req.body;
    const { id } = req.user;

    const product = await Product.create({
        name: name,
        price: price,
        description: description,
        date: date,
        category: category,
        image: req.file.filename,
        createdbyid: id,
    });

    return res.status(201).json({
        status: true,
        message: 'Product created successfully',
        product: product,
    });
};

exports.getProducts = async (req, res) => {
    const { id } = req.user;

    const products = await Product.find({ createdbyid: id });

    return res.status(200).json({
        status: true,
        message: 'Products found',
        products: products,
    });
};
