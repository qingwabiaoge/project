# 父子嵌套

![1566146868286](img/1566146868286.gif)

   .     |路由视图           | 动态组件     
---|---|---     
标签        | < route-view/>代表页面组件 |<  component />代表普通组件
作用        | 切换页面级别的组件 | 切换模块级别的组件
设置组件参数 | history栈的值   | is的值     
组件生命周期 |切换运行distroyed|切换运行distroyed
加< keeplive>    | 切换运行activate deactivate| 切换运行activate deactivate        
transition | 可用            |可用      


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




# $router=router
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

# $route注入了当前的路由信息

- name
- path
- meta元信息(popstate) 
- prames
- param query

# < router-view />组件属性


### 显示什么父子组件:
网址:path决定

### 组件属性(路由解耦) : 
```js
props:true

props:{name:'1'} 

props(){ return{name:'1'}} 

```

# 路由流配置加active
```
const router = new VueRouter({
                               linkActiveClass :'active',
                               })
```

# VUE 路由参数变化页面内容不刷新

### 原因
出现这种情况是因为的路由参数获取写路由绑定组件的生命周期的created钩子函数里,相同路由参数改变后并没有销毁和重建，

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