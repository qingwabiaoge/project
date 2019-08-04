

# 声明过没赋值的值都是undifined



### 声明变量

```
let i

//i===undefine
```

### 函数默认返回值

函数没有返回值默认返回undefined

### 函数参数

函数参数也是变量的一种形参默认也是undefined


### 构造函数参数

构造函数也是函数的一种 

比如vue对象的默认属性的值undefined

构造函数调用new button(),实参传值给形参未赋值的形参为undefine


### obj={}声明一组undefined
obj={}(构造函数this语法糖)，才能用obj.a,没赋值默认都是undefine


```
   let obj = {}//要先定义obj

    console.log(obj.a)
    console.log(obj.b)
    console.log(obj.c)

```

### Array=[] 声明一组undefined

也是一种对象
声明数组变量arr 才能用arr[0],没赋值默认都是undefine

```
  let arr=[]
  console.log( arr[0],arr[1])


let [a,b]=[1]

//b=== undefine
```

### 解构赋值

```
 let {a,b}={a:1}   // let obj={a:1}, obj.b undefine

//b===undefine
```
### vue对象参数


```
< mybutton type="">< /mybuttion>

type输出undifine
```