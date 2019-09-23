/**
 * Created by Administrator on 2016/7/12.
 * 流数据
 */
var fs = require('fs');
var stream = fs.createReadStream('../assets/1.json');
var data = "";
stream.on('data', function (chrunk) {//将数据分为一块一块的传递

  console.log(chrunk.toString());
  data += chrunk;
});
stream.on('end', function () {
  console.log(data);
  console.log(data.toString());

});
