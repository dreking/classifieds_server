const log = require('../config/winston');

module.exports = (error, req, res, next) => {
    log.error(error, error);

    return res.status(500).json({
        status: false,
        message: 'Something went wrong. Please try again later',
        error: error,
    });
};
