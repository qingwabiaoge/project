//把utf-8编码的字符串写入到缓冲区
var buffer = new Buffer.from('Hello Node');
//缓冲区转码到base64字符串
var base64=buffer.toString('base64')		//  ->  SGVsbG8gTm9kZQ==
//把base64字符串写入到缓存区
var buffer2=new Buffer.from(base64,'base64')
//把缓存区内容输出成utf-8
console.log(buffer2.toString('utf-8'))//helloword
