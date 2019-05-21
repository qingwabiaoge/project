
exports.a=1
exports.b=2
/*
其实就是
moudle.export={}
exports=moudle.export
exports.a=1
exports.b=1
此时moudle.export也等于{a=1,b=1}
若再赋值moudle.export={c:1}
exports仍然等于{a=1,b=1}
最终输出moudle.export的值{c:1}

*/
