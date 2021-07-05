const { model, Schema } = require('mongoose');

const UserSchema = new Schema(
    {
        fname: { type: String, required: true },
        lname: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        role: { type: String, required: true, enum: ['seller', 'customer'] },
    },
    { timestamps: true }
);

const User = model('User', UserSchema);

module.exports = User;
