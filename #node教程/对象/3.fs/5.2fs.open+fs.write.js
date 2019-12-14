const fs = require('fs')

fs.open('../assets/1.txt', 'a', function (err, fd) {
  if (err) {
    console.error(err)

  } else {
    var buffer = new Buffer.from('一二三四五六七')

    //fs.write(fd, buffer, offset, length, position, callback);

    /**
     * fd, 使用fs.open打开成功后返回的文件描述符
     * buffer, 一个Buffer对象，v8引擎分配的一段内存
     * offset, 整数，从缓存区中读取时的初始位置，以字节为单位
     * length, 整数，从缓存区中读取数据的字节数
     * position, 整数，写入文件初始位置；
     * callback(err, writeByte, bufferSelf), 写入操作执行完成后回调函数，
     *                 writeByte实际写入字节数，
     *                 bufferSelf被读取的缓存区对象
     */

   //附加buffer部分内容写入文件
    fs.write(fd, buffer, 3, 9, 12, function (err, writeByte, bufferSelf) {
      if (err) {
        console.error(err)
      } else {
        console.log(writeByte, bufferSelf.toString())
      }
    })

  }
})
