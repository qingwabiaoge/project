const str = '您好，世界！'

//中文字符串转buffer
let buf = Buffer.from(str);
//<Buffer e6 82 a8 e5 a5 bd ef bc 8c e4 b8 96 e7 95 8c ef bc 81>
console.log(buf)

buf = Buffer.from(str,'utf-8');
//<Buffer e6 82 a8 e5 a5 bd ef bc 8c e4 b8 96 e7 95 8c ef bc 81>
console.log(buf)

// buffer实例 转字符串----------------------------------------------------------
// 输出 72756e6f6f62
console.log(buf.toString('hex'));

// 输出 cnVub29i
console.log(buf.toString('base64'));

//runoob
console.log(buf.toString('utf-8'));
