// 401 Unauthorized
// 403 Forbidden

function error(err,req, res, next) {
  res.status(500).send("Something failed")
}

module.exports =error