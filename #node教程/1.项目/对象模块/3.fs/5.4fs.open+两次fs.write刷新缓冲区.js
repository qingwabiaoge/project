const fs = require('fs')
/** 使用fs.write写入文件时，操作系统是将数据读到内存，再把数据写入到文件中，当数据读完时并不代表数据已经写完，
因为有一部分还可能在内在缓冲区内。
因此可以使用fs.fsync方法将内存中数据写入文件；--刷新内存缓冲区；

fs.fsync(fd, [callback])

 * fd, 使用fs.open打开成功后返回的文件描述符
 * [callback(err, written, buffer)], 写入操作执行完成后回调函数，written实际写入字节数，buffer被读取的缓存区对象
 */

fs.open( '../assets/1.txt', 'a', function (err, fd) {
    if (err)
        throw err;
    var buffer = new Buffer('我爱nodejs编程');
    fs.write(fd, buffer, 0, 9, 0, function (err, written, buffer) {
        console.log(written.toString());

        fs.write(fd, buffer, 9, buffer.length - 9, null, function (err, written) {
            console.log(written.toString());
            fs.fsync(fd);
            fs.close(fd);
        })
    });
});
