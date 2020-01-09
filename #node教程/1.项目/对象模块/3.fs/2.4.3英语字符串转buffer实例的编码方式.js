//string转buffer对象里文本的编码方式
const buf = Buffer.from('runoob', 'ascii');
console.log(buffer)

//buffer对象转字符串时使用的编码方式-----------------------------------
// 输出 72756e6f6f62
console.log(buf.toString('hex'));

// 输出 cnVub29i
console.log(buf.toString('base64'));
