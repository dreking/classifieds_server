const User = require('../models/user');

const { verifyToken } = require('../utils/jwt');
const log = require('../config/winston');

const authenticate = async (req, res, next) => {
    const authHeader = req.get('Authorization');
    if (!authHeader)
        return res.status(404).json({ status: false, message: 'Token not found' });

    try {
        const [type, token] = authHeader.split(' ');
        if (type !== 'Bearer')
            return res.status(500).json({ status: false, message: 'Token is invalid' });

        const decodedToken = verifyToken(token);
        if (!decodedToken)
            return res.status(500).json({ status: false, message: 'Token is invalid' });

        const user = await User.findById(decodedToken.id);
        if (!user)
            return res.status(403).json({
                status: false,
                message: 'You dont have the priviledge',
            });

        req.jwt = { ...decodedToken };
        req.user = user;

        next();
    } catch (error) {
        log.error(error, error);
        return res.status(500).json({ status: false, message: 'Token is invalid' });
    }
};

module.exports = authenticate;
