
const mongose = require('mongoose');

/* # mongodb 为协议
# james： 连接数据库的用户
# 123456: 该用户的密码
# localhost: 本地的地址（因为这是本地环境）
# 27017: mongodb的端口号(这个一般是默认值，也可以进行修改)
# example: 数据库的名字 */
const db = 'mongodb://root:123@127.0.0.1:27017/admin';

// 连接
mongose.connect(db);

const { connection } = mongose;
connection.on('connected', () => {
  console.log('Mongoose 连接到 example数据库');
});
connection.once('open', (callback) => {
  console.log('数据库启动了');
  // app.listen(8080, () => console.log('Express server listening on port 8080'));
});
