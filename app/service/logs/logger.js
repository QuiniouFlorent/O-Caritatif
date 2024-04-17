import winston from "winston";

let date = new Date();
let dailylog = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;

const logger = winston.createLogger({

    format: winston.format.combine(
        winston.format.timestamp({ format: `DD-MM-YYYY HH:mm:ss`}),
        winston.format.json()
    ),
    transports: [new winston.transports.File({
        filename: `./app/service/logs/dailylogs/${dailylog}.log`,
        level: `debug`
    })]
});

export default logger;