# 对比< r outer-view/> 和动态组件和普通组件

| .                                      | 路由视图                                                     | 动态组件                                                     | 普通ui组件                     |
| -------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------ |
| 标签                                   | < route-view/>代表页面组件                                   | <  component />代表ui组件或者原生dom                         | < cl/>                         |
| 作用                                   | 替代多个路由页面级别的组件                                   | 替代普通组件或原生组件                                       | 组件本身                       |
| 在子组件设置普通组件数据属性默认值     | const cl={<br />props:{<br />mydata:{type:String,default:'msg'}<br />}<br />} | 同左                                                         | 同左                           |
| 在父组件  标签位置上设置is或name属性   | < route-view/>替代注册的默认组件<br />< route-view name="cl"/> | < component is="cl" / >                                      |                                |
| 在父组件  标签位置上设置数据属性       | < router-view  :data='mydata'/>代表多个组件,设置了多个组件的属性 | <  component is="cl" :data='mydata' />代表多个组件设置多个组件的属性 | < cl  :data="mydata"/>         |
| 在父组件  标签位置上设置key属性        | < router-view :key=this.route.query.q/><br />query /param变化会重新销毁再建立此页面组件,<br />当然也运行created和distoryed钩子 | < component is="cl"  :key=''/ >                              | < cl v-for   :key/>            |
| 在路由构造器参数注册组件和设置路由属性 | 为不同路由注册不同组件和设置__优先级最高__的属性值<br />==和命名视图不能一起使用==<br />{path: '/',        <br />  components: {  cl, default: def }   <br />1. props: true   <br />2. props: {name: 'world'}<br />3.props(route) { return { name:route.query.q}}}<br />} |                                                              |                                |
| 在父组件注册组件                       |                                                              | {<br />components: {cl,default:def}<br />}                   | {<br />components: {cl}<br />} |
| 触发beforeDestroyed ,destroyed         | name改变                                                     | is改变运行                                                   | v-if切换运行/v-show没有        |
| 触发< keeplive>的activate deactivate   | 切换运行                                                     | 切换运行                                                     |                                |
| < transition/ >                        | 可用                                                         | 可用                                                         | 可用                           |



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

