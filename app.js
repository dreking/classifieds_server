const app = require('express')();

require('./startup/logging')();
require('./startup/routes.js')(app);
require('./startup/db')();

module.exports = app;
