# 对比< r outer-view/> 和动态组件和普通组件

| .                                          | 路由视图                                                     | 动态组件                                                     | 普通ui组件                                                   |
| ------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 标签                                       | < route-view/>代表页面组件                                   | <  component />代表ui组件或者原生dom                         | < dialog/>                                                   |
| 作用                                       | 替代页面级别的组件                                           | 替代普通组件和原生组件                                       | 显示隐藏  组件级别的组件                                     |
| 标签                                       | < route-view name="cl"/>                                     | < component is="cl" / >                                      | < dialog isShow="false"/>                                    |
| 在组件标签上设置其他属性                   | < router-view :q=this.route.query.q/>代表多个组件,设置了多个组件的属性 | <  component is="cl" :data='mydata' />代表多个组件设置多个组件的属性 | <dialog <br />:show="isShow"<br />:data="mydata"/>           |
| 设置属性默认值<br />本质是函数参数的默认值 | **获取params和query然后计算后传参**:<br />1. props: true   <br />2. props: {name: 'world'}<br />3.props(route) { return { name:route.query.q }}} | **组件里属性参数**:<br />props:{<br />mydata:{type:String,default:'msg'}<br />} | **组件里数据传参**<br />props:{<br />mydata:{type:String,default:'msg'}<br />} |
| 设置key属性                                | < router-view :key=this.route.query.q/>query /param变化会重新销毁再建立此页面组件,<br />当然也运行created和distoryed钩子 | < component is="cl"  :key=''/ >                              | for循环输出时间需要key                                       |
| 通信(改变数据)                             | history栈顶(本质是全局变量)                                  | 组件内通信+父子通信(本质是参数传值+回调函数传值)             | 同左边                                                       |
| 注册组件:                                  | {<br />path:'/cl',  //路由路径和path匹配<br />components: {   cl, default: def }//匹配到path后使用组件<br />} | {<br />components: {cl,default:def}<br />}                   | {<br />data(){return{isShow:false}}<br />components:{dialog}<br />} |
| beforeDestroyed ,destroyed                 | name改变                                                     | is改变运行                                                   | v-if切换运行/v-show没有                                      |
| < keeplive>的activate deactivate           | 切换运行                                                     | 切换运行                                                     |                                                              |
| < transition/ >                            | 可用                                                         | 可用                                                         | 可用                                                         |



# 优先级

### 1.router构造函数,props配置的属性特定路由优先级最高

```
          {
                path: '/',
                name: 'index',
                //配置特定路由 优先级高于<router-view/>的标签属性
                props:{prop:`配置的属性特定路由优先级最高`},
                component:def
            },
```

### 2. 标签的属性

```
 <cl prop=""></cl>
```

```
 <router-view prop="router-view标签设置属性"></router-view>
```

```
 <component is="def" prop="is标签属性"></component>
```

### 3.组件的props默认属性

```
 const def = {template: `<div>{{prop}}</div>`, props: {prop: {default: '组件props:{}默认属性'}}}
```

