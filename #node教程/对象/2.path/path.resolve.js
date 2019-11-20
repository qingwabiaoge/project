const path = require('path')

function l(a) {
    console.log(a)
}


//resolve默认加了__path
l(path.resolve('/foo/bar', './baz'))

l(path.resolve(__dirname, './baz'))

//x错误范例 argument[1]不能用绝对路径 ----------------------------------------------------------
l(path.resolve('/foo/bar', '/tmp/file/'));
l(path.resolve(__dirname, '/tmp/file/'));






