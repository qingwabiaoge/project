[^1]: prototype:原型 
[^2]: Property: 属性



# Object

### 创建新对象


##### json直面量(用于新建对象和控制台打印)

```
{a:1,b:2}//唯一的一个表达式表示出key的类型
```

##### new Object() 等价json语法糖

```
new Object({a:1,b:2})
```

##### Object.creat(__proto__,{})


```javascript
    var obj = Object.create({},{
        "a":{value :1,congigurable :false,enumerable :true,writable:true},
        "b":{value :2,congigurable :false,enumerable :true,writable:true},
        "c":{value :3,congigurable :false,enumerable :true,writable:true}
    });

    console.log(obj.a)//输出 1
    console.log(obj.b)//输出 2
    console.log(obj.c)//输出 3

```

### 对象地址赋值给变量

```js
const obj={a:1}  //obj里存内存地址#000x1

```

###  弱类型对象扩展

```js
obj.b=2   //js弱类型可扩展
```

# 判断是否对象类型

```js
typeof(obj)
obj instance of Object
```

# 属性分类

> __所有属性:__ 
>
> * 判断:in 
>
> * 列出: obj  

>> __原型属性对象包:__
>>
>> * 判断:Person.prototype.isprototypeof(person),
>> * 列出: Object.getPrototypeOf(obj)

>> __OwnProperty:__ 
>>
>> * 判断:obj.hasOwnProperty(propertyName) 
>>
>> * 列出:Object.getOwnPropertyNames(obj)

>>> __可枚举的属性:__  
>>>
>>> * 判断 obj.propertyIsEnumerable(propertyName) 
>>> * 列出:Object.keys(obj), for...in

>>> __不可枚举的own属性__

注:只有属性判断组用的对Object的实例方法

# 所有属性(真实数据结构)

## in操作符

![](3.png)

>  in判断对象是否有某属性(返回Boolean,in操作符是针对key的)

````javascript
'constructor' in {a:1}

'__proto__' in {a:1}

'a'in{a:1}

0 in [1,2] //true

'hasOwnProperty'in{a:1}
````

### 1.Object.prototype[^1]

##### 判断prototype是否是对象的原型


```
Person.prototype.isprototypeof(person)
```
```
 person instanceof(Person)
```

##### 获得原型对象


````js
obj.__proto__
````


````js
Object.getPrototypeOf(obj)              //和obj._proto_功能相同
````



![](./object.prototype.png)

##### 访问原型对象的方法

```js
const obj={a:1}
Object.protype.valueof(obj)
obj.valueof()
```

### 2.OwnProperty[^2]

##### 定义

自己创造的属性,不是从原型copy的

#####   判断是否是OwnProperty

````
const obj={a:1}
obj.hasOwnProperty(a) 返回boolen 
````
##### 列出OwnProperty

```
const obj={a:1}
Object.getOwnPropertyNames(obj)//['a']
```

##### 添加修改删除访问own属性

###### json直面量  (键都是字符串obj.a或者obj[' ']):

```javascript

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
const i='color'  obj[i+'primary'],变量做键值[i+'primary']返回字符串
   

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

###### 删除键

```
delate(obj.a)
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

###### 访问obj.a

本质:赋值obj和'a'计算后的返回值(地址或普通值)

```
obj={}
obj.a=2//赋值普通值
console.log(obj.a)//取得普通值
obj.b={i:1}//赋值地址
console.log(obj.b)//获得地址

```

obj.a 和obj 无上下级关系 都是平级

![](6.png)

```
    obj = {a: {i: 1}}
    const obj2 = obj.a //获得地址
    obj2.i=10
    console.log(obj)//{a: {i: 10}}

```




### 3.enumerableProperty[^2]


#####  判断对象的某个属性是否可枚举


````
obj.propertyIsEnumerable(propertyName)返回boolen 判断指定属性是否可以枚举
````


##### 枚举出可枚举的属性
for....in操作符 列出可枚举的key (in操作符是针对key的)

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
##### 枚举类型转JSON

JSON.stringify( )   列出obj返回json字符串

```
JSON.stringify(obj) 
```

##### 合并可枚举对象

######  合并后改变了内存地址

```
const obj = {a: 1}, obj2 = {a:10,b: 20}
console.log({...obj,...obj2}) //{a:10,b: 20}
```

```
const obj = [10], obj2 =[10,20]
console.log([...obj,...obj2]) //[10,10,20]
```

######  Object.assign合并而不改变内存地址

```
Object.assign({a: 1}, {a:10,b: 20})//{a: 10,b: 22}
Object.assign({a: 1}, [1, 2, 3])//{0: 1, 1: 2, 2: 3, a: 1}
Object.assign({a: 1}, '123') //{0: "1", 1: "2", 2: "3", a: 1} //字符串自动封装对象了
Object.assign(vue_instance,{msg:'msg'})
```

```
Object.assign([1,2,3],[4,5,6]//[1,2,3]
Object.assign([1,2,3],'456') //["4", "5", "6"]
```

# Object.is()  ===  比较对象是否相等

##### 相同之处

引用类型:同一地址的对象才相等

```
Object.is([],[]) //false
[]===[]//false
```

普通类型:值相等就相等

#####  两处不同：

```
+0 === -0 //true
NaN === NaN // false

Object.is(+0, -0) // false
Object.is(NaN, NaN) // true
```



# 对象间的函数通信

等同于两个对象内的函数通信


# js一切数据皆是对象(键值对)

对象= = =键值对= = =引用类型

### 新建Object类型

##### new新建对象

```
new Objcet({a:1,b:2})
```

##### 字面量新建对象等同于上面

```
{a:1,b:2}
```

### 新建有类型的对象,生成指定格式的键值对,以及复制原型的键值对

按照构造函数Vue的指定规则,生成对象,这种对象属于Vue类型

##### new Fn()新建对象

```js
new Object({a:1})
new Function('a,b','a+b')
new Array(1,2,3)
new RegExp(/\w/,'ig')
//------------------------
new String('hello');         const str=new Object('hello')
//----------------------
new Vue()
```

##### 字面量等新建对象(同于new Fn())和命令行用于打印

```js
const obj={a:1}
function fn(){}
const arr=[1,2,3]
const reg=/\w/ig
//----------------
const str='hello'
//----------------
<div id='app'></div>
```

```js
console.log(obj)//{a:1}
console.log(fn)//fn(){}
console.log(arr)//[1,2,3]
console.log(reg)// /\w/ig
//----------------
console.log(str)//hello
//----------------
console.log(document.getElmentById())//<div id='app'></div>

```

##### Object.creat({name:'''})

```
Object.creat{{},{a:1}}
```

###  返回的真实对象都是`{prop:'',fn(){}}`的形式


```js
                                         Functon

                                            ↓
    String     (Object)                   Array               (Vue,nuxt,Koa)   
                  ↓                         ↓                         ↓                          ↓        
           {a:1,b:2,tostring(){}..}  {0:1,1:2,length:2}       {i:1,fn:()=>{}}   {0:1,1:2,length: 0,indexOf(){}}

```

### 对象的内存地址赋值给变量

```js
const obj={a:1}
function fn(){}
const arr=[1,2,3]
const reg=/\w/ig
//----------------------
const str=new String('hello') 
//----------------------
const el=document.getElmentById()
const vm=new Vue({})

```

### 基本类型值赋值给变量

```js
const str='hello'
```

### js弱类型键值对都可以再扩展

```js

const obj={a:1}
obj.b=2

//------------------------------


function fn(){
    
}
fn.a=1

//------------------------------

const arr=[1,2,3]
arr.a=1
//------------------------------
const str=new String('hello') 
str.a=1
//------------------------------

const el=document.getElmentById()
el.a=1

//------------------------------

const reg=/\w/
reg.a=1

//------------------------------

const vm=new Vue({})
vm.a=1

```

