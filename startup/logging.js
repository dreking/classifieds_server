const log = require('../config/winston');

module.exports = () => {
    const { DEVELOPER, ENVIRONMENT } = process.env;

    if (!DEVELOPER || !ENVIRONMENT) {
        log.error(new Error('Developer/Environment not defined'));
        throw new Error('Invalid credentials');
    }
};
