const { loggers, format, transports } = require('winston');

const { DEVELOPER } = process.env;

const log = loggers.add('log-server', {
    format: format.combine(
        format.label({ label: `${DEVELOPER} Logger` }),
        format.timestamp(),
        format.json()
    ),
    exitOnError: false,
    handleExceptions: true,
    transports: [
        new transports.Console({
            level: 'silly',
            format: format.combine(format.colorize({ all: true }), format.simple()),
            handleExceptions: true,
        }),
        new transports.File({
            level: 'silly',
            filename: `logs/${DEVELOPER}-file.log`,
        }),
    ],
    exceptionHandlers: [
        new transports.File({
            level: 'silly',
            filename: 'logs/exceptions.log',
            handleExceptions: true,
        }),
    ],
});

module.exports = log;
