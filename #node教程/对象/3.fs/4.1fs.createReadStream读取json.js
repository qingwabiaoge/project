var fs = require('fs');
var stream = fs.createReadStream('../assets/1.json');
var data = "";
//将数据分为一块一块的传递
stream.on('data', function (chrunk) {
    console.log(chrunk.toString());
    data += chrunk;
});
stream.on('end', function () {
    console.log(data);
    console.log(data.toString());
});
