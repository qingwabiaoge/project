# props


小程序


```
"usingComponents": {
    "tab-bar": "../../components/tabBar/tabBar"
  }
```

vue

```
props:['']
 props:{
            prop1:{},  //声明属性等价于  let prop1 默认取值undifine
            prop2:{
                type:String,
                default:'prop2'
            }
        },
```


```
properties: {
    // 弹窗标题
    currentpage: {            // 属性名
      type: String,     // 类型（必填）
      value: 'index'     // 属性初始值（可选），如果未指定则会根据类型选择一个
    }
  }
```

原生

```
obj={}
console.log(obj.a)//undifne
```