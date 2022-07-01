// 401 Unauthorized
// 403 Forbidden

module.exports =function (handler) {
  return async(req,res,next)=>{
    try {
      await handler(req,res)
    } catch (error) {
      next()
    }
  }
}