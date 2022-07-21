const winston = require("winston");
require("winston-mongodb");
require("express-async-errors");

module.exports = function () {
    winston.handleExceptions(
        new winston.transports.Console({colorize:true,prettyPrint:true}),
        new winston.transports.File({ filename: "uncaughtException.log" })
      );
      process.on("uncaughtException", (ex) => {
        console.log("We got an un caught exeption");
        winston.error(ex.message, ex);
      });
      winston.add(winston.transports.File, { filename: "logfile.log" });
      winston.add(winston.transports.MongoDB, {
        db: "mongodb://localhost/vidly",
        level: "error",
      });
}