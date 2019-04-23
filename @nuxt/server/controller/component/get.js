const components = require('./data')
module.exports = async (ctx, next) => {
  ctx.state.data = {components}
}
