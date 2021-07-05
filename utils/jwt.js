const jwt = require('jsonwebtoken');
const { JWT_KEY } = process.env;

const signToken = (data) => {
    return jwt.sign(data, JWT_KEY);
};

const verifyToken = (token) => {
    return jwt.verify(token, JWT_KEY);
};

module.exports = { signToken, verifyToken };
