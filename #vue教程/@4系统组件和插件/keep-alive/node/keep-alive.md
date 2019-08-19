# < keep-alive >

## 用处

router组件和 is动态组件

## 钩子函数

无<keep-live>的钩子

```
created(){}

distroyed(){}


```

< keep-alive > 后的钩子

```
<keep-alive>
    <router-view></router-view>
</keep-alive>
```

```
取消了 

destroy(){} 和 created(){}

增加了激活和失活的钩子函数

deactivated(){}
activated(){}

```


