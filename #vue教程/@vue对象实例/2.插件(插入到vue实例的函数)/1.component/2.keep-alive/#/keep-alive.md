# < keep-alive >

## 场景

router组件和 is动态组件

```js
<keep-alive>
    <router-view/>
</keep-alive>
```

```js
<keep-alive>
    <component is=""/>
</keep-alive>
```

## 加< keep-alive > 后的钩子

切换路由和动态组件不再销毁组件destroy(){} 和 created(){}

增加了激活和失活的钩子函数deactivated(){}activated(){}

