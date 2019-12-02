let fs = require('fs')
// 引用imageinfo模块

let filesList = []

function readFileList (path, filesList) {
  let files = fs.readdirSync(path)
  files.forEach((item) => {
    let stat = fs.statSync(path + item)
    if (stat.isDirectory()) {
      // 递归读取文件
      readFileList(`${path + item}/`, filesList)
    } else {
      let obj = {}// 定义一个对象存放文件的路径和名字
      obj.path = path// 路径
      obj.filename = item// 名字
      filesList.push(obj)
    }
  })

  console.log(files)
}

readFileList('./images/', filesList)
