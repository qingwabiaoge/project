# Function和对象的关系

fn继承于Object.protype,是对象类型

 new fn创造新的对象实例

# 创建函数对象

### 构造函数创建对象

```javascript
new Function('a', 'b', 'return a + b');
```

### 直面量语法糖等价构造函数创建

```
  function f(a,b) {return a + b}//语法糖等价上面的构造函数生成

    f.a = 1
    f.b = 2
    console.log(f)//  function f() {} 打印出来的只是直面量表达式

```

# Fn和()计算得到return返回值

# 所有属性 in

![1](2.png)




### Function.protype
```javascript
   const Fn = function () {
        console.log(Fn.arguments)
        console.log(Fn.arguments.callee)
    }
    Fn.a = 10
    Fn()
   
    

  //1.原型属性Function.prototype---------------
   console.log({'Function.protype': Object.getPrototypeOf(fn)})
  /*{ 
    apply: ? apply()
    arguments: (...)
    bind: ? bind()
    call: ? call()
    caller: (...)
    constructor: ? Function()
    length: 0
    name: ""
    toString: ? toString()
    Symbol(Symbol.hasInstance): ? [Symbol.hasInstance]()
    get arguments: ? ()
    set arguments: ? ()
    get caller: ? ()
    set caller: ? ()
    }*/

```
### OwnProperty
```

    
    //2.Own属性,Function构造生成---------------------    
    console.log(Object.getOwnPropertyNames(Fn))//(6)["length", "name", "arguments", "caller", "prototype", "a"]
     console.log(Fn.name)




```
### keys
```

    //3.可枚举属性:静态变量,静态方法--------------------
     console.log(Object.keys(Fn)) //['a']


     //for..in还能枚举出 

    for (item in f) {
        console.log(item) //a,b

    }
```



