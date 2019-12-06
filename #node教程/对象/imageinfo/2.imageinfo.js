var imageinfo = require('imageinfo'),
  fs = require('fs');

fs.readFile('./images/萝莉.jpg', function(err, data) {
  if (err) throw err;

  info = imageinfo(data);
  console.log("Data is type:", info.mimeType);
  console.log("  Size:", data.length, "bytes");
  console.log("  Dimensions:", info.width, "x", info.height);
});
