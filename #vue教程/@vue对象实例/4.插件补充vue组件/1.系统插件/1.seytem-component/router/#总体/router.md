# 父子嵌套

![1566146868286](img/1566146868286.gif)



# 创建路由实例 const router=new Router({})


```html


<div id="app">
    vm跟组件:
    <ul>

        <li>
            <router-link to="/fa/">/fa/</router-link>

        </li>
        <li>
            <router-link :to="{name:'cs'}">name="cs"</router-link>
        </li>

    </ul>
    ------------------------------
    <!--这个router-view容易忘记-->
    <router-view></router-view>

</div>
<script>
                          
    
    const fa = {template: '<div>fa组件:<router-view></router-view></div>'}   // 这个<router-view/>非常容易忘记

    const cs = {template: '<div>/fa/cs</div>'}

    //routes配置router-view组件和route-link组件
    const router = new VueRouter({

            routes: [{//配置最顶级的<route-view/>
                path: '/fa/', //<router-link/> 用什么path可以访问
                name: 'fa', //<router-link/> 用什么name可以访问
                component: fa, 
                children: [ //配置嵌套的<route-view/>
                    {
                        path: '/cs',
                        name: 'cs',
                        component: cs,
                    }

                ]
            },

            ]
        }
    )
    const vm = new Vue({
        el: '#app',
        router,
        created() {
            console.log(this)
        }
    })

</script>
```


# router 钩子函数:


![](./4.png)

路由守卫  router.beforeEach

```javascript

  router.beforeEach((to, from, next) => {//路由的声明周期 进入路由时间的钩子函数
        console.log(from)//要离开路由的$route信息
        console.log(to)//要加载的路由的$route信息

        if (to.meta.admin === true) {
            console.log('需要admin授权')
        }
        next()
    })

```




# 通过全局mixin注入到每个vue实例
$router=router
路由实例router 挂载在vue实例的$router子键上

# 向history栈顶推入网址

### < router-link />

```
<router-link to='/new?cid=1'>news</router-link>
```


### $router.push()

$router.push方法向$router栈注入栈顶元素

```
this.$router.push({
                    name: 'chatList'
                }, () => {
                    this.$router.push({name: 'chatRoom'})
                })
```

原生
```

history.pushState({state: 1}, "newtitle","1.html?b=1")
```

### $router.go()


```
$router.go(-1)//返回上一个$router也是使用方法

```

```
   goBack() {
                    window.$router.length > 1
                        ? this.$router.go(-1)       //this.$router类似一个数组,倒数第1个是现在的地址路径,寻找倒数第2个地址路径,此路径会在浏览器地址栏显示
                        : this.$router.push('/')  //类似向this.$router数组push一个路径 此路径会在浏览器地址栏显示
                }
```
原生
```
history.go(-1)

```

# $route

### 原理

$router=history[histroy.length]

然后通过mixin注入到了每个 vue文件

### 注入了history栈顶的信息

- name
- path
- meta元信息(popstate) 
- prames
- param query

# 对比动态组件和< r outer-view/> 和动态组件

| .                                          | 路由视图                                                     | 动态组件                                                     | dialog                                                       |
| ------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 标签                                       | < route-view/>代表页面组件                                   | <  component />代表ui组件                                    | < dialog/>                                                   |
| 作用                                       | 切换页面级别的组件                                           | 切换模块级别的组件                                           | 显示隐藏组件级别的组件                                       |
| 设置显示哪些组件                           | 1. 先用path过滤  {path: '/'},再看标签上的name<br />2. < route-view name=""/>   <br />注册组件  `{  components: {    default: def,    cs  }}` | 2. < component is="cs" / >   <br />注册组件`{components: {default: def,    cs  }}` | <dialog :data="data":show="isShow"/>                         |
| 组件生命周期                               | 切换运行beforeDestroyed ,destroyed                           | 切换运行beforeDestroyed ,destroyed                           | v-if有,v-show没有                                            |
| 加< keeplive>                              | 切换运行activate deactivate                                  | 切换运行activate deactivate                                  |                                                              |
| transition                                 | 可用                                                         | 可用                                                         | 可用                                                         |
|                                            |                                                              |                                                              |                                                              |
| 替代组件的类型                             | 页面组件                                                     | 普通组件                                                     |                                                              |
| 在组件标签上设置属性                       | X  因为< route-view >代表多个组件                            | X  因为<  component />代表多个组件                           | √  标签设置属性                                              |
| 设置属性默认值<br />本质是函数参数的默认值 | **获取params和query然后计算后传参**:<br />1. `props: true`      <br />2. `props: {name: 'world'}` <br />3.`props(route) {  return {  name: (new Date().getFullYear() + parseInt(route.params.years)) + '!'  }}`<br /> | **组件里数据传参**:<br />props:{msg:{type:String,default:'msg'} | **组件里数据传参**<br />props:{msg:{type:String,default:'msg'}} |
| 通信(改变数据)                             | history栈顶(本质是全局变量)                                  | 父子通信(本质是参数传值+回调函数传值)                        | 同左边                                                       |

# 路由流配置加active

```
const router = new VueRouter({
                               linkActiveClass :'active',
                               })
```

# VUE 路由参数变化页面内容不刷新

### 原因
出现这种情况是因为的路由参数获取写路由绑定组件的生命周期的created钩子函数里,相同路由参数改变后并没有销毁和重建

### 解决方法
##### 1.vue-watch监听路由'$route对象是否变化

```
watch: {
  // 方法1
  '$route' (to, from) { //监听路由是否变化
    if(this.$route.params.articleId){// 判断条件1  判断传递值的变化
      //获取文章数据
    }
  } 
   //方法2
  '$route'(to, from) {
    if (to.path == "/page") {  /// 判断条件2  监听路由名 监听你从什么路由跳转过来的
       this.message = this.$route.query.msg     
    }
  }  
}
```

##### 2.添加key属性作为不同的组件


```
<router-view :key=this.route.query.a />
```

# 异步加载路由

在切换到当前当前页面路由时,才从服务器下载当前组件的代码,节省网速