vue-meta的官方文档[在这里](https://github.com/declandewet/vue-meta)。
文档中比较详细地说明了在浏览器端和服务器端如何使用 vue-meta 修改页面头部信息，这里我主要介绍下在SPA项目中管理meta info的使用方法。，

**vue单页运用中，对单独页面使用meta的时候，他不是直接修改，而是插在下面覆盖上面的meta进行修改。**

1、安装

```
npm install vue-meta --save
```

2、在main.js引入

```
import Meta from 'vue-meta'
Vue.use(Meta)
```

3、为需要修改的页面**单独定义**metaInfo

[![复制代码](img/copycode.gif)](javascript:void(0);)

```
  export default {
    metaInfo: {
      title: 'This is the test',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=2,user-scalable=yes' }
      ]
    }
}
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

4、异步请求数据可以使用

如果component中使用了异步请求数据，可以使用 `metaInfo()` 方法。

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
<template>
  <div>
    <h1>{{{ title }}}</h1>
  </div>
</template>

<script>
  export default {
    name: 'post',
    data () {
      return {
        title: ''
        description: '这是一篇文章...'
      }
    },
    metaInfo () {
      return {
        title: this.title,
        meta: [
          { vmid: 'description', name: 'description', content: this.description }
        ]
      }
    },
    created () {
      this.initData()
    },
    methods: {
      initData () {
        axios.get('some/url').then((resp) => {
          // 设置title时 metaInfo 会同时更新
          this.title = resp.title
          this.description = resp.decription
        })
      }
    }
  }
</script>
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

 