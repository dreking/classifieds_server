const { model, Schema, Types } = require('mongoose');

const ProductSchema = new Schema(
    {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        description: { type: String, required: true },
        image: { type: String, required: true },
        date: { type: Date, required: true },
        category: { type: String, required: true },
        createdbyid: { type: Types.ObjectId, required: true, ref: 'User' },
    },
    { timestamps: true }
);

const Product = model('Product', ProductSchema);

module.exports = Product;
