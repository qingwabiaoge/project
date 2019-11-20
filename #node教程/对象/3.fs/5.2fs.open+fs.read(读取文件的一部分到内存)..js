const fs = require('fs')


fs.open('../assets/1.txt', 'r', function (err, fd) {
    if (err) {
        console.error(err);
        return;
    } else {
        var buffer = new Buffer(255);
        console.log('buffer.length',buffer.length);
        //fs.read(fd, buffer, offset, length, position, callback);
        /**
         * fd, 使用fs.open打开成功后返回的文件描述符,表示什么文件
         * buffer, 一个Buffer对象，v8引擎分配的一段内存
         * offset, 整数，向缓存区中写入时的初始位置，以字节为单位
         * length, 整数，读取文件的长度,每一个汉字utf8编码是3个字节 英文是1个字节
         * position, 整数，读取文件初始位置；文件大小以字节为单位
         * callback(err, bytesRead, buffer), 读取执行完成后回调函数，bytesRead实际读取字节数，被读取的缓存区对象
         */
        fs.read(fd, buffer, 0, 9, 3, function (err, bytesRead, buffer) {
            if (err) {
                throw err;
            } else {
                console.log('bytesRead实际读取字节数',bytesRead);
                console.log('buffer.slice(0, bytesRead).toString()',buffer.slice(0, bytesRead).toString());
                //读取完后，再使用fd读取时，基点是基于上次读取位置计算；
                fs.read(fd, buffer, 0, 9, null, function (err, bytesRead, buffer) {
                    console.log('bytesRead实际读取字节数',bytesRead);
                    console.log('buffer.slice(0, bytesRead).toString()',buffer.slice(0, bytesRead).toString());
                });
            }
        });
    }
});