const path = require('path')

function l(a) {
    console.log(a)
}



l(path.join('/foo/bar', '/baz/'));//绝对目录相连 两者相加为绝对目录D:\tmp\file 后面的才有用


l(path.join('/foo/bar', './baz/'))

l(path.join(__dirname, './baz/'))

l(path.join('/foo/bar', '../baz/'))

l(path.join('./foo/bar', '../baz/'))






