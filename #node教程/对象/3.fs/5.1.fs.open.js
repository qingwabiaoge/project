const fs=require('fs')

// fs.open(filename, flags, [mode], callback);

/**
* filename, 必选参数，文件名
* flags, 操作标识，如"r",读方式打开
*
*                 r只读，r+读写，不创建
*                 w新建只写，w+新建读写，二者都会将文件内容清零（以w方式打开，不能读出。w+可读写）
*                 w+与r+区别：
*                 r+：可读可写，若文件不存在，报错；w+: 可读可写，若文件不存在，创建
*                 r+与a+区别：r+进行了覆盖写
*                 以a,a+的方式打开文件，附加方式打开
*
* [mode],权限，如777，表示任何用户读写可执行
* callback 打开文件后回调函数，参数默认第一个err,第二个fd为一个整数，表示打开文件返回的文件描述符，window中又称文件句柄
*/


fs.open('../assets/1.txt', 'r', '0666', function (err, fd) {
    console.log(fd);
});