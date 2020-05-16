const {Global} = require('../../model/');


//编辑产品
module.exports = async (ctx) => {
  const  global=ctx.request.body


  //updateOne({type:'global'},设置了条件就会出错,唯一键错误
  await  Global.updateOne({}, global,{upsert: true})

    ctx.state.code=0

};
