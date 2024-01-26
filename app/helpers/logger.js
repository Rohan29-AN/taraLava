const winston = require("winston");
const DailyRotateFile = require("winston-daily-rotate-file");
const timezoned = () => {
    return new Date().toLocaleString('fr-FR', {
        timeZone: 'Europe/Moscow',
        dateStyle: 'short',
        timeStyle: 'medium',
    });
}
const logFormat = winston.format.combine(
    winston.format.timestamp({format: timezoned}),
    winston.format.align(),
    winston.format.printf(
        info => `${info.timestamp} ${info.level}: ${info.message}`,
    ),);
const transport = new DailyRotateFile({
    level: "console",
    dirname: "./log_winstone",
    filename: "bo_owayzz_%DATE%.log",
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '50m',
    prepend: true,
});
transport.on('rotate', function (oldFilename, newFilename) {
// call function like upload to s3 or on cloud
});
const logger = winston.createLogger({
    levels : {
        error: 0,
        warn: 1,
        info: 2,
        http: 3,
        verbose: 4,
        database: 5,
        console: 6
    },
    format: logFormat,
    transports: [
        transport,
        new winston.transports.Console({
            level: "console"
        }),
    ]
});

process.on('unhandledRejection', function (err) {
    logger.error(err);
});
module.exports = logger;
module.exports.stream = {
    write: function(message, encoding){
        logger.http(message);
    }
};