 var a = 'Michael';
 var b = 'Jackson';
 var c = function () {
     console.log(this.b)
 }
 export{a,b,c}
 //export可以解构赋值,export default不支持结构赋值 就这点区别
 //缩写等价于{a:a,b:b,c:c}等价于{a: 'Michael', b: 'Jackson', c: 1958}
