module.exports = async (ctx, next) => {
 //node的res对象
 ctx.body = Object.keys(ctx.res) // 要不和ctx.respose混淆

}