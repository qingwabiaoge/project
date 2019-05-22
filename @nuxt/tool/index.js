const r = require.context('', false, /(?!index)\.js$/)

let tools = {}

r.keys().forEach(item => {

  const key = item.split('/')[item.split('/').length - 1].split('.')[0]
  tools[key] = r(item)
})
export default tools

