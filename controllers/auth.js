const User = require('../models/user');
const { hashPassword } = require('../utils/bcrypt');

exports.postCreateUser = async (req, res) => {
    const { fname, lname, email, password } = req.body;

    const user = await User.create({
        fname: fname,
        lname: lname,
        email: email,
        password: hashPassword(password),
        role: 'seller',
    });

    user.password = undefined;

    return res.status(201).json({
        status: true,
        message: 'User created successfully',
        user: user,
    });
};
