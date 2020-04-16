# 所有组件内都注入了 $route

创建router对象  通过全局mixin注入到每个vue实例的$route的key


# $route是如何改变的

### 原理
```html
<button onclick='history.pushState({msg: 1}, "newtitle","1.html?b=1"); render()'>pushState添加一条历史记录</button>
```

`$router=Object.assign(history.state,location.href)`的数据,然后通过全局mixin注入到了每个 vue文件

- name
- path
- meta元信息
- prames
- param query


