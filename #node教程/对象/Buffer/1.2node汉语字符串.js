const str = '您好，世界！'
const buf = Buffer.from(str, 'utf-8');

// 输出 72756e6f6f62
console.log(buf.toString('hex'));

// 输出 cnVub29i
console.log(buf.toString('base64'));

//runoob
console.log(buf.toString('utf-8'));
