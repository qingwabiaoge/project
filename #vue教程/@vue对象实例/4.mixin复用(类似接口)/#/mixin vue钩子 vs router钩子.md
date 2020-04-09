## 全局mixin混入到每个vue实例

> 以前的理解有偏差正确的理解是这样的:
>
> 1. 所谓全局组件,全局指令,全局过滤器原理是通过Vue.mixin 混入到每个vue实例
>
> 2. 建立单独的mixin文件,  配置项里的mixin混入一部分vue实例配置项
>
>    ```js
>    import mymixin from './mymixin'
>    mixins:mymixin
>    ```
>
> 3. 配置项里 directive component fileter 应用一个到vue实例

 1. 全局组件

 2. 全局指令

 3. 全局过滤器

 4. nuxt asyncData钩子

 5. nuxt fetch钩子

 6. nuxt validate

 7. vue生命周期钩子

 8. vuex map

 9. router钩子/nuxt中间件通过mixin为每个组件都增加这个route钩子

    ![](./img/4.png)

 10. nuxt 路由中间件

## 局部mixin

配置项里mixin复用机制


## 注意
extends:{ }和Vue.extend( )毫无联系
