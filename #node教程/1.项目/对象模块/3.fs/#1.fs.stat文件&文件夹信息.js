console.log(`-------文件信息-------`)

const fs = require('fs')
const callback = require('../callback')

fs.stat('../assets/1.jpg', (err, stats) => {
  if (err) {
    console.log(err)
  } else {

    /*
    * Stats {
  //包含文件的设备的数值型标识。
  dev: 300724,
  //表示文件类型与模式的位域。
  mode: 33206,
  //文件的硬链接数量。
  nlink: 1,
  //文件拥有者的数值型用户标识。
  uid: 0,
  //拥有文件的群组的数值型群组标识。
  gid: 0,
  //如果文件是一个特殊文件，则返回数值型的设备标识。
  rdev: 0,
  //文件系统用于 I/O 操作的块大小。
  blksize: undefined,
  //文件系统特定的文件索引节点数值。
  ino: 2251799814232438,
  //文件的字节大小。
  size: 2480,
  //分配给文件的块的数量。
  blocks: undefined,
  //表示文件最后一次被访问的时间。
  atime: 2018-09-06T09:51:48.319Z,
  //表示文件最后一次被修改的时间。
  mtime: 2018-09-06T09:51:48.323Z,
  //表示文件状态最后一次被改变的时间。
  ctime: 2018-09-06T09:51:48.323Z,
  //表示文件的创建时间。
  birthtime: 2018-09-06T09:51:48.319Z
}
    * */
    console.info(stats)
    console.log(stats.__proto__)
    console.log(stats.size);
//获取文件最后一次访问的时间；
    console.log(stats.atime.toLocaleString());
//文件创建的时间；
    console.log(stats.birthtime.toLocaleString());
//文件最后一次修改时间；
    console.log(stats.mtime.toLocaleString());
//状态发生变化的时间；
    console.log(stats.ctime.toLocaleString())
//判断是否是目录；是返回true；不是返回false；
    console.log(stats.isFile())
//判断是否是文件；是返回true、不是返回false；
    console.log(stats.isDirectory())
  }
})
