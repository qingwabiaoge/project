const path = require('path')

function l(a) {
    console.log(a)
}


//resolve默认加了__path
l(path.resolve('/foo/bar', './baz'))

//x错误范例  绝对1+绝对2=绝对2
l(path.resolve('/foo/bar', '/tmp/file/'));//绝对目录相连 两者相加为绝对目录D:\tmp\file 后面的才有用







