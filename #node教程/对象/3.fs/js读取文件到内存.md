| 读取文件          | 写入到内存                                                   |
| ----------------- | ------------------------------------------------------------ |
| 读取.js,.json文件 | const obj=require('./1.js')  ,写入到内存中的obj对象          |
| 读取txt文件       | fs.open('../assets/1.txt' ),    const buffer = new Buffer.alloc(255)写入到内存的buffer对象 |

