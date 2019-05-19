### this

5. 箭头函数内部this继承其父函数的this,为了方便使用上级函数的this才引入的


2. method（this）不算method函数作用域因为是指令就是操作符一样



````
   var a=1
    function fn(i) {
        var a=2
        console.log(i)
    }
    fn(this.a)//此处this为window,()并非是函数内部不会间隔作用域
````
