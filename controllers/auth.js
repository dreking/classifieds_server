const User = require('../models/user');
const { hashPassword, comparePassword } = require('../utils/bcrypt');
const { signToken } = require('../utils/jwt');

exports.postSignUp = async (req, res) => {
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

exports.postSignIn = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });
    if (!user)
        return res.status(401).json({
            status: false,
            message: 'Email or Password is incorrect',
        });

    if (!comparePassword(password, user.password))
        return res.status(401).json({
            status: false,
            message: 'Email or Password is incorrect',
        });

    const token = signToken({
        id: user.id,
        fname: user.fname,
        lname: user.lname,
        role: user.role,
    });

    return res.status(200).json({
        status: true,
        message: 'Sign in successfully',
        type: 'Bearer',
        token: token,
    });
};
