var imageinfo = require('imageinfo'),
  fs = require('fs');

fs.readFile('./images/萝莉.jpg', function(err, data) {
  if (err) throw err;

  info = imageinfo(data);
  console.log(info)

});

fs.readFile('./images/文件.txt', function(err, data) {
  if (err) throw err;

  info = imageinfo(data);
  console.log(info)

});
