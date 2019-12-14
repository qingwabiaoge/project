const fs=require('fs')
const callback=require('../callback')
/*fs.open('./cs/1.txt','a','777',function (err,fd) {
 const buf=new Buffer.from('一二三四五六七')
  fs.write(fd,buf,3,9,12,(err,writeten,bufferSelf)=>{
    console.log(writeten,bufferSelf.toString())
  })
})*/

//fs.readdir('./cs',callback)
fs.readFile('./cs/1.txt',(err,res)=>{console.log(res.toString())})
