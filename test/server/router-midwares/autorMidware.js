
const autorMidware = async (ctx, next) => {

    console.log(ctx.request)
    const checkToken = ctx.request.header['authorization'] === 'mytoken'
    if (checkToken) {
      next()
    }
  
  }

  module.exports=autorMidware