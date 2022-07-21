const { info, verbose } = require('winston');
const winston = require('winston')
// 401 Unauthorized
// 403 Forbidden

function error(err,req, res, next) {
  winston.error(err.message,err);

  // error
  // warn
  // info
  // verbose
  // debug
  // silly

  res.status(500).send("Something failed")
}

module.exports =error