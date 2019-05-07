const fs = require('fs')
const path = require('path')
const CONFIG=require('../../config')
module.exports=async (ctx, next) => {
    // 上传单个文件

    const file = ctx.request.files.file; // 获取上传文件


    // 创建可读流
    const reader = fs.createReadStream(file.path);

    //当前时间挫
    const timestamp = (new Date()).valueOf();
    //取得后缀名
    const suffix=file.type.split('/')[1]
    //改名
    const rename=timestamp+'.'+suffix;
    //在服务器路径
    const filePath = path.join(__dirname, '../../../static/upload') + `/${rename}`;

    // 创建可写流
    const upStream = fs.createWriteStream(filePath);
    // 可读流通过管道写入可写流
    reader.pipe(upStream);
    ctx.state.code=1
    ctx.state.data={
        msg:'上传成功',
        res:CONFIG.uploadBase+'/'+rename

    }

}
