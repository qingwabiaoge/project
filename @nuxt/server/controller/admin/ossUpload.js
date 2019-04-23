const formidable = require("formidable");
const co = require('co');
const OSS = require('ali-oss');
const config=require('../../config')
const client = new OSS(config.OSS);

module.exports =async (ctx, next) => {
    var alioss_upfile = function () {
        return new Promise(function (resolve, reject) {
            var form = new formidable.IncomingForm();
            form.parse(ctx.req, function (err, fields, files) {
                if (err) {
                    throw err;
                    return;
                }
                // 文件名
                var date = new Date();
                var time = '' + date.getFullYear() + date.getMonth() + 1 + date.getDate();
                var filepath = time + '/' + date.getTime();
                var fileext = files.file.name.split('.');
                var upfile = files.file.path;
                var newfile = filepath + '.' + fileext[1];
                //ali-oss
                co(function* () {
                    client.useBucket('leicdn'); //自定义项
                    var result = yield client.put(newfile, upfile);
                    //var result = yield client.put(fields.store, new Buffer(fields.buffer));
                    console.log('文件上传成功!', result.url);
                    ctx.response.type = 'json';
                    ctx.response.status = 200
                    ctx.response.body = {
                        code: 0,
                        data: {
                            msg: '上传成功',
                            res: result.url,
                        }
                    }
                    resolve(next());
                }).catch(function (err) {
                    console.log(err)
                    throw new Error(err)
                });
            });
        });
    };
    await alioss_upfile();
};


