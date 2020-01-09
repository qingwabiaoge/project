const path = require('path')

function l (a) {
  console.log(a)
}

l(path.join('/foo/bar', '/baz/'))

l(path.join('/foo/bar', './baz/'))

l(path.join(__dirname, './baz/'))

l(path.join('/foo/bar', '../baz/'))

l(path.join('./foo/bar', '../baz/'))
