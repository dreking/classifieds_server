const mongoose = require('mongoose');

const log = require('../config/winston');

module.exports = async () => {
    const { ENVIRONMENT, MONGODB_URI } = process.env;

    if (!ENVIRONMENT) {
        log.error(new Error('Invalid credentials'));
        return process.exit(1);
    }

    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useFindAndModify: false,
            useCreateIndex: true,
            useUnifiedTopology: true,
        });

        log.debug(`DB connected in ${ENVIRONMENT} environment!!`);
    } catch (error) {
        log.error('Failed to connect');
        throw error;
    }
};
