[[toc]]

# 创建新对象



### new Fn()


##### new 操作符
```javascript

    //模拟new new都做了什么
    var obj = new Object();
    obj.__proto__ = Person.prototype;
    var res = Person.call(obj, 'xiaohong', 12)// 改变obj的值

    if (typeof res === Object) {//判断function的返回值 若返回值为对象 person就为这个返回值了 构造函数废了
        person = res
    }
    else { //如果返回值为undefine或者基础变量 构造函数成功
        person = obj

    }


```



##### new Fn()

```javascript
 new Fn() 等价于Fn.call(new Object,1,2,3)
 
new Object({a:1,b:2})

new Array(1,2,3) 

```

### json直面量语法糖

```
{a:1,b:2} [1,2,3]
```


### Object.creat()

```
    var obj = Object.create({})
```


```
    var obj = Object.create({},{
        "a":{value :1,congigurable :false,enumerable :true,writable:true},
        "b":{value :2,congigurable :false,enumerable :true,writable:true},
        "c":{value :3,congigurable :false,enumerable :true,writable:true}
    });

    console.log(obj.a)//输出 1
    console.log(obj.b)//输出 2
    console.log(obj.c)//输出 3

```






# 属性

### 属性分类

> __所有属性:__  判断:in 列出: obj  

>> __原型属性对象包:__ 判断:Person.prototype.isprototypeof(person),
                列出: Object.getPrototypeOf(obj)

>> __OwnProperty:__ 判断:obj.hasOwnProperty(propertyName) 列出:Object.getOwnPropertyNames(obj)

>>> __可枚举的属性:__  判断 obj.propertyIsEnumerable(propertyName) 列出:Object.keys(obj), for...in

>>> __不可枚举的own属性__

注:只有属性判断组用的对Object的实例方法


### 所有属性 in操作符 判断对象是否有此属性

判断对象是否有某属性(返回Boolean) (in操作符是针对key的)

````
'constructor' in {a:1}

'__proto__' in {a:1}

'a'in{a:1}

0 in [1,2] //true

'hasOwnProperty'in{a:1}
````







### 1.原型属性

##### 判断prototype是否是对象的原型


```

Person.prototype.isprototypeof(person)

```
```
 person instanceof(Person)
```






##### 获得原型对象

````

obj.__proto__

````




````
Object.getPrototypeOf(obj)              //和obj._proto_功能相同

````



##### Object.protype

一切皆是对象,继承对象的protype所以所有对象都可以用以下方法
![](./object.prototype.png)
##### Funciont.protype

```javascript
{
    apply(){},
    bind() { },
   call() { }
}
```

##### Array.protype


```javascript
Array.protype={
    pop(){},
    push(){},
    shift(){},
    unshift(){},
    every(){},
    some(){},
    sort(){},
    map(){},
    fileter(){},
    reduce(){},
    find(){},
    forEach(){},
    slice(){},
    contact(){},
    includes(){},
    indexOf(){},
    lastIndexOf(){}
    
    
}

```



### 2.OwnProperty
自己创造的属性,不是从原型copy的

#####   判断是否是own属性

````
obj.hasOwnProperty(a) 返回boolen 

````
##### 创造own属性



 
###### obj.a



* 创建 修改 obj.a



构造函数this创建的属性(包括枚举型和不可枚举型),以及以后扩展的属性

```javascript
    function Fn(name, age) {
        this.name = name;
        Object.defineProperty(this, 'age', {
            configurable: false,//不可删除
            enumerable: false,//不可枚举
            writable: true,//可读性
            value: age//value,可写
        })
    }

    const i = new Fn('小女', 21)
    console.log(Object.keys(i))
```



 json直面量表示法(键都是json字符串):

```

obj={

        'fn'() {
            console.log('fn')
        },
        '0'(){
            console.log(0)
        }

}
obj[”a”]
obj.a等价于 obj[”a”]
obj[’0’]
obj[0]  等价于 obj[’0’]
const i='color'  obj[i+'primary'],变量做键值
   

 //数组
arry[0]
arry['0']



 //类数组对象
let ArrayLike = { 0 : "a", 1 : "b", 2 : "c" ,length:3};
ArrayLike[2]
ArrayLike['2']


 //字符串(类数组)


let str = 'abc'

str[1]
str['1']




//先定义obj 才能用obj.a,没赋值默认都是undifine


   let obj = {}//要先定义obj再设置obj.a才行

    console.log(obj.a)
    console.log(obj.b)
    console.log(obj.c)


//arr=[] 才能用arr[0],没赋值默认都是undifine


  let arr=[]
  console.log( arr[0],arr[1])
```

* 删除键

```
delate(obj.a)
```

* 本质:赋值obj和'a'计算后的返回值(地址或普通值)

```

obj={}
obj.a=2//赋值普通值
console.log(obj.a)//取得普通值
obj.b={i:1}//赋值地址
console.log(obj.b)//获得地址

```
*  obj.a 和obj 无上下级关系 都是平级

![](6.png)

```

    obj = {a: {i: 1}}
    const obj2 = obj.a //获得地址
    obj2.i=10
    console.log(obj)//{a: {i: 10}}

```





###### 属性定义器 键值也是字符串


````
    obj = {a: 1, b: 2}


    Object.defineProperty(obj, 'c', {//可以改变其他属性的值，可以把其他属性的值赋值给自己
        configurable: false,
        enumerable: true,
        set: function () {
            this.a = 0
        },
        get: function () {
            return this.b
        }

    })
    obj.c = 3 //set触发tis.a=0
    console.log(obj)//除非get
````


````
 obj = {a: 1, b: 2, c: 3}
    Object.defineProperty(obj, 'd', {
        configurable: false,
        enumerable: false,
        writable: true,
        value: 4
    })

````




### 3.enumerableProperty


#####  .propertyIsEnumerable 判断对象的某个属性是否可枚举


````
obj.propertyIsEnumerable(propertyName)返回boolen 判断指定属性是否可以枚举
````


##### 枚举出可枚举的属性
for循环语句+in操作符 列出可枚举的key,并对其操作 (in操作符是针对key的)

```
	for....in
```

for....of 枚举出可枚举的value,用于可迭代类型(array)

```
	for....of
```


  Object.keys(obj) 列出可枚举的key返回数组

````
    Object.keys(obj)
  
````
Object.values(obj)列出可枚举的value返回数组

```
  Object.values(obj)

```

##### 枚举属性影响以下函数
```javascript

for...in
Object.keys()
JSON.stringify()
Object.assign()//会忽略掉不可枚举的属性
```
 








# 表达式和实际对象


### obj

##### 构造函数生成

```javascript

new Object({a:1})
```

##### 直面量语法糖

```
obj={} //语法糖等级于new Object({})
obj.a=1
obj.b=2
console.log(obj)//{a:1,b;2}  打印出来的只是直面量表达式
```

##### 实际对象

![1](3.png)

##### 获得实际对象

```javascript
    const obj = {a: 1, b: 2}

    console.log(Object.prototype.isPrototypeOf(obj))
    console.log(Object.getPrototypeOf(obj))

    console.log(obj.hasOwnProperty('a'))
    console.log(Object.getOwnPropertyNames(obj))//["a", "b"]

    console.log(obj.propertyIsEnumerable('a'))
    console.log(Object.keys(obj)) //["a", "b"]
    for(item in obj){
        console.log(obj[item])
    }


```

##### 无法和运行操作符()进行计算操作 obj( )错误

### function,带函数定义式 可以和()计算的对象
继承于对象还能创造新对象
##### 构造函数生成
```javascript

new Function('a', 'b', 'return a + b');
```


##### 直面量语法糖


```
  function f(a,b) {return a + b}//语法糖等价上面的构造函数生成

    f.a = 1
    f.b = 2
    console.log(f)//  function f() {} 打印出来的只是直面量表达式

```
##### 实际对象


![1](2.png)



##### 判断和取得实际对象

```javascript

    const Fn = function () {
    }
    Fn.a = 10
    


  //原型属性Function.prototype
    console.log(Object.getPrototypeOf(Fn))    //function () { [native code] }
    console.log(Fn.call,Fn.apply,Fn.bind) //function call() { [native code] }
    console.log(Fn.call === Function.prototype.call,
                 Fn.apply===Function.prototype.apply,
                 Fn.bind===Function.prototype.bind) //true


    
    //Own属性,Function构造生成    
    console.log(Object.getOwnPropertyNames(Fn))//(6)["length", "name", "arguments", "caller", "prototype", "a"]

    //可枚举属性:静态变量,静态方法
        console.log(Object.keys(Fn)) //['a']


  //for..in还能枚举出 

    for (item in f) {
        console.log(item) //a,b

    }
```



#####  可以和运行操作符()进行计算操作 fn()




### array


##### 构造函数生成

```javascript
new Array(3) //[null(3)]
Array.of(3)//[3]
new Array(1,2,3)
```

##### 直面量语法糖

```
const arr=[] //语法糖等级于new Array()
arr[0]=1
arr[1]=2
console.log(arr)//[1,2] 打印出来的只是表达式
```

##### 实际对象

![](4.png)

##### 取得实际对象的键值


```javascript
  const arr = [1, 2, 3]

    console.log(Array.prototype.isPrototypeOf(arr))
    console.log(Object.getPrototypeOf(arr)) //concat: ƒ concat()     constructor: ƒ Array()  copyWithin: ƒ copyWithin().....


    console.log(arr.hasOwnProperty(length))
    console.log(Object.getOwnPropertyNames(arr))//["0", "1", "2", "length"]

    console.log(arr.propertyIsEnumerable((0)))
    console.log(Object.keys(arr)) //["0", "1", "2"]
    console.log(Object.values(arr))// [1, 2, 3]
    for(item in arr){
        console.log(item)
    }
    for(item of arr){
        console.log(item)
    }



```


##### 无法和运行操作符()进行计算操作 arr()错误


### dom

##### 直面量
```
<div id="app" class="cs" data-src="datasrc">

    <h1>h1标题</h1>
    <p>段落</p>
</div>

```

##### 真实对象

![](5.png)


##### 获得对象

```javascript
    const el = document.getElementById('app')
    el.a=1



    console.log(Object.getPrototypeOf('el'))


    console.log(el.hasOwnProperty('a'))//true
    console.log(Object.getOwnPropertyNames(el))//['a']

    console.log(el.propertyIsEnumerable('a'))//true
    console.log(Object.keys(el))//['a']

```

### reg

```javascript
    const reg = /\w{3}/i
    reg.a = 10
    console.log({reg})
```

##### 构造函数生成

```javascript
new RegExp('\d','i')
``` 

##### 字面量

```javascript

/\w{3}/i
```

##### 实际对象(显示不准确,看下边)

![](./7.png)

##### 获得实际对象信息

```javascript
   const reg = /\w{3}/i
    reg.a = 10
    console.log({reg})

    console.log(RegExp.prototype.isPrototypeOf(reg))
    console.log(Object.getPrototypeOf(reg))


    console.log(reg.hasOwnProperty('lastIndex'))//true
    console.log(Object.getOwnPropertyNames(reg))//["lastIndex", "a"]


    console.log(reg.propertyIsEnumerable('a'))//true
    console.log(Object.keys(reg))//['a']

```



# 对象合并


##### 合并后改变了内存地址

```
    const obj = {a: 1}, obj2 = {a:10,b: 20}
   console.log({...obj,...obj2}) //{a:10,b: 20}

```

```
  const obj = [10], obj2 =[10,20]
   console.log([...obj,...obj2]) //[10,10,20]
```

##### 合并而不改变内存地址

```
 Object.assign({a: 1}, {a:10,b: 20})//{a: 10,b: 22}
 Object.assign({a: 1}, [1, 2, 3])//{0: 1, 1: 2, 2: 3, a: 1}
Object.assign({a: 1}, '123') //{0: "1", 1: "2", 2: "3", a: 1}
```
```
Object.assign([1,2,3],[4,5,6]//[1,2,3]
Object.assign([1,2,3],'456') //["4", "5", "6"]
```


# Object.is()比较是否相等


##### 引用类型:必须是同一地址的对象
```

Object.is([],[]) //false
   
[]===[]//false

object
```

##### 普通类型

值相等就相等


 Object.is()，其行为与===基本一致，不过有两处不同：

```
+0 === -0 //true
NaN === NaN // false

Object.is(+0, -0) // false
Object.is(NaN, NaN) // true
```



# 对象间的函数通信



等同于两个对象内的函数通信





# 一切皆是对象(键值对)

 都是`{prop:'',fn(){}}`的形式,不同的是静态方法和实例化对象的属性和方法不同

``` 
                                         Functon

                                            ↓

构造器函数:      (Object)                   Array             自己写的构造函数(Vue,nuxt,Koa)        String
                  ↓                         ↓                         ↓                          ↓        
           {a:1,b:2,tostring(){}..}  {0:1,1:2,length:2}       {i:1,fn:()=>{}}            {0:1,1:2,length: 0,indexOf(){}}

```




>_原型 :[英]prototype_  

>_属性: [英]Property_

