var fs = require("fs");

const callback = (err, res) => {
  if (err) {
    console.log(err)
  } else if (res) {
    console.log(`异步读取json:${res.toString()}`)

  } else {
    console.log('成功')
  }
}


fs.readFile('../assets/1.json', 'utf-8', callback);
