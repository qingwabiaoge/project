var fs = require('fs');
//30buffer.length===10str.length
var buf = new Buffer.allocUnsafe(30);

/*
open 打开文件
@parameter1   r+,Open for reading and writing
*/
fs.open('../assets/1.txt', 'r+', function (err, fd) {
    if (err) {
        return console.error(err);
    } else {
        console.log('文件打开成功');
        console.log('准备读取文件');
        console.log('res',res)

        // buf 缓存区
        // 0, buf.length 缓存区区间
        // 0, 读取1.txt开始位置
        fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
            if (err) console.log(err);

            if (bytes > 0) {
                //这里可以设置长度
                console.log(bytes + ' 字节被读取');
                const i = buf.slice(0, bytes).toString()
                console.log(i);

            }
        })
    }
})