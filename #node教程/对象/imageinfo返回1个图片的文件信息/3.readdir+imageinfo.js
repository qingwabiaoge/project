var fs = require("fs");
//引用imageinfo模块
var imageinfo = require("imageinfo");

var images = []

// 自己改进的
function readSubFileList(path, images) {
  var files = fs.readdirSync(path);
  files.forEach(function (item, index) {
    var stat = fs.statSync(path + item);

    if (stat.isDirectory()) {
      //递归读取文件
      const obj = {path: item, filename: []}
      images.push(obj);
      readSubFileList(path + item + "/", obj.filename)
    } else {
      let filePath = fs.readFileSync(path + item)
      //判断是否为图片
      if (imageinfo(filePath)) {
        images.push(item) //名字
      }
    }
  })
}


readSubFileList('./images/', images)

console.log(images)
