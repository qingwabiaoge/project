const path=require('path')

//绝对+相对才有用
const x=path.resolve('/foo/bar', './baz');//D:\foo\bar\baz


//绝对1+绝对2=绝对2
const y=path.resolve('/foo/bar', '/tmp/file/');//绝对目录相连 两者相加为绝对目录D:\tmp\file 后面的才有用


const z=path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif');
//相对目录链接解析成绝对目录 D:\vueci\@@@教程\js\node\code\wwwroot\static_files\gif\image.gif

const dirname= __dirname //当前绝对目录E:\vueci\@node
const root = path.join(__dirname, './static');
const root2 = path.resolve(__dirname, './static');

console.log(x)
console.log(y)
console.log(z)
console.log(dirname)
console.log(root)
console.log(root2)
