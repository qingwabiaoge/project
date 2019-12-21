const str='qinqinqin'

const reg=/((qin){3})/i
console.log(reg.test(str))
console.log(RegExp.$1)
console.log(RegExp.$2)  //每个括号都算一个
console.log(RegExp.$3)