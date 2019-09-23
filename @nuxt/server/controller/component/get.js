const components = require('./data')
module.exports = async (ctx, next) => {
  ctx.state.data = {components}
}





















/*
const fs = require('fs')
const path = require('path')
let components
fs.readFileSync(path.join(__dirname,'utf-8', './data.json'),(err,res)=>{
  if(err){console.log(err)}
  else {
    components= JSON.parse(res)
  }
})
module.exports = async (ctx, next) => {
  ctx.state.data = {components}
}
*/
