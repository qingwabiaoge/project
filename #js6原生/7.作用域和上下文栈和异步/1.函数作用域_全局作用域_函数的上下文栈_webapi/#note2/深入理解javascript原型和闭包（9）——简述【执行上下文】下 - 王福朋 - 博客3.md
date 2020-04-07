
## arguments
````
arguments[0]

arguments[1]

arguments.calle

//函数默认参数

function f(a,b=2) {
console.log(a,b)
}
f(1)

````

#### 没有实参传入时,形参默认赋值undefined

```

< script>
   function fn(i){
       console.log(arguments[0])
       console.log(i)

       }
    fn()//undefined
< /script>

```
