const Message = require('../../model/Message');

// 获得所有message
module.exports = async (ctx) => {

  let {name,tel,content} = ctx.query


  messages = await Message.find({
      // $or: [
      //
      //   {name: new RegExp(name, 'i')},
      //   {tel: new RegExp(tel, 'i')},
      //   {content: new RegExp(content, 'i')}
      //
      // ]
    }
  ).sort()

  ctx.body = {
    code: 0,
    data: {
      messages
    }

  };


};
