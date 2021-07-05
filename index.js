require('dotenv').config();
require('express-async-errors');

const app = require('./app');
const log = require('./config/winston');

process.on('uncaughtException', (error) => {
    log.exceptions.handle(error);
});

process.on('unhandledRejection', (error) => {
    throw error;
});

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => log.debug(`Listening on port ${PORT}`));
