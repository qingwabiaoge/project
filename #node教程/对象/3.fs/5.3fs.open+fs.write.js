const fs=require('fs')

fs.open( '../assets/1.txt', 'a', function (err, fd) {
    if(err) {
        console.error(err);
        return;
    } else {
        var buffer = new Buffer('写入文件数据内容');

        //fs.write(fd, buffer, offset, length, position, callback);

        /**
         * fd, 使用fs.open打开成功后返回的文件描述符
         * buffer, 一个Buffer对象，v8引擎分配的一段内存
         * offset, 整数，从缓存区中读取时的初始位置，以字节为单位
         * length, 整数，从缓存区中读取数据的字节数
         * position, 整数，写入文件初始位置；
         * callback(err, written, buffer), 写入操作执行完成后回调函数，written实际写入字节数，buffer被读取的缓存区对象
         */

        //写入'入文件'三个字
        fs.write(fd, buffer, 3, 9, 12, function (err, written, buffer) {
            if(err) {
                console.log('写入文件失败');
                console.error(err);
                return;
            } else {
                console.log(buffer.toString());
                //写入'数据内'三个字
                fs.write(fd, buffer, 12, 9, null, function (err, written, buffer) {
                    console.log(buffer.toString());
                })
            }
        });
    }
});