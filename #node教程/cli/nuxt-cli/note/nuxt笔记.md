# nuxt流程

### 打包

![](./img/1.png)


### 生命周期

![ ](./img/4.png) 

![1571589091138](img/1571589091138.png)

# 详解流程

### ctx

有些键值在客户端存在有些在服务端存在

![](./img/2.png)

ctx.req.headers

![](./img/17.png)


### 把自定义数据注入到上下文对象
#####  注入的ctx

```javascript
//nuxt.config.js ->plugins
export default(ctx)=> {
//新建函数挂载在app上 app.fn
//   console.log(ctx)

  ctx.userAgent = process.server
    ? ctx.req.headers["user-agent"] //当是服务器进程时:从客户端的请求链接总获得userAgent
    : navigator.userAgent;            //当是浏览器端时:从浏览器对象中获得浏览器uA

}

```

#####  注入到 app  vm  store router

```javascript
//nuxt.config.js ->plugins, 
export default ({ app }, inject) => {
  inject('myCombinedInjectedFunction', (string) => console.log('app联合注入', string))
  //注入到了 app  vm vm.store
}
```
##### 注入到ctx.env(只能注入变量)

```javascript
//nuxt.config.js ->env 
env: {
    HOST: process.env.HOST ,
    PORT: 3333,
  }

```

### vuex nuxtServerInit 方法


在服务器端运行vuex,因为在服务器端,所以浏览器缓存中获得token , 改用从req中获得数据

```javascript
actions: {
    //context作为第二个参数
  nuxtServerInit ({ commit,dispatch }, { req }) {
    if (req.session.user) {
   //如果已登陆过可以通过req拿到request的文件头,文件头里有session信息以及token
      commit('user', req.session.user)
    }
  }
}
```


nuxtServerInit 方法接收的上下文对象和 fetch 的一样，但不包括 context.redirect() 和 context.error()。
### 中间件

##### 本质

进路由时的钩子,猜测是router

##### 不同位置的中间件执行顺序

1.nuxt.config.js->router  //进入每个路由前使用的代码


```javascript

module.exports = {
  router: {
    //当前流和上级栏目
    linkActiveClass: 'active',
    //进入每个路由前使用中间件
    middleware: 'route'
  },

```

2.layout.vue->middleware

```` javascript
export default {
  middleware: 'auth',
  }
````
3.page.vue->middleware

```` javascript
export default {
  middleware: 'auth',
  }
````

/middleware/auth.js

````javascript

export default function ({ store, error, redirect, req }) {
  if (!store.state.token) {
    redirect('/login')
  }
}

````

### 路由参数校验 page->validate()

Nuxt.js 可以让你在动态路由组件中定义参数校验方法。

举个例子： pages/users/_id.vue

```javascript
export default {
  validate ({ params }) {
    // 必须是number类型
    return /^\d+$/.test(params.id)
  }
}
```
如果校验方法返回的值不为 true或Promise中resolve 解析为false或抛出Error ， Nuxt.js 将自动加载显示 404 错误页面或 500 错误页面。

想了解关于路由参数校验的信息，请参考 页面校验API。
### 读取page目录下的vue文件

##### page-> fetch()只能填充vuex

如果页面组件设置了 fetch 方法，它会在组件每次加载前被调用__（在服务端或切换至目标路由之前）__。

```javascript
fetch({ store, params }){}
```


##### page-> asyncData()可以填充vuex和data 

在服务器端调用asyncData时，您可以访问用户请求的req和res对象。

```javascript
export default {
  async asyncData ({ req, res }) {
    // 请检查您是否在服务器端
    // 使用 req 和 res
    if (process.server) {
     return { host: req.headers.host }
    }

    return {}
  }
}


```


```javascript
   async asyncData({store}) {

      await store.dispatch('getBanners', '')

    }
```

### header设置

##### nuxt.config.js->head,本质估计是mixin

```javascript
  head: {
    title: pkg.name,
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: pkg.description}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ],
    script: [
      {src: '/script/script.js'}]

  }

```

##### 页面page.vue->head

```javascript

< template>
  <h1>{{ title }}</h1>
< /template>

< script>
export default {
  data () {
    return {
      title: 'Hello World!'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}
< /script>


```



### 服务器端vue实例下载到浏览器成为浏览器端vue数据



### 服务器上的vue根实例app的生命周期:

```

  beforeCreated
  created钩子
  首次render,$nexttick(),
  不运行组件内的mounted等其他钩子函数

```

### nuxt作为koa的中间件,render虚拟dom成html页面。

```
nuxt.render()
```

###  代码下载到浏览器重新开始走一遍vue的生命周期

##### mouted()后可以用windows方法

![](./img/8.png)


### 点击nuxt-link 进入其他页面

点击链接的页面都是在客户端运行此时跟普通的spa没什么区别了vue使用的是对象,全局变量注入vue对象的键值,使用this调用

```
export default {
  watchQuery: ['page']
}
````
### 浏览器端-路由钩子检验

`validate()`

### asyncData函数的异步请求

__asyncData请求完成后__,才开始vue的生命周期(这点和vuecli的不同)

### 浏览器端Vue生命周期

# modules

## styleResources

- 类型: `Object`
- 默认: `{}`

当您需要在页面中注入一些变量和`mixin`而不必每次都导入它们时，这非常有用。

Nuxt.js 使用 https://github.com/nuxt-community/style-resources-module 来实现这种行为。

您需要为css预处理器指定要包含的 模式 / 路径 ： `less`, `sass`, `scss` 或 `stylus`

您不能在此处使用**路径别名**(`~` 和 `@`)，

:warning: You cannot use path aliases here (`~` and `@`)，你需要使用相对或绝对路径。

安装 style-resources：

```
$ yarn add @nuxtjs/style-resources
```

根据需要安装：

- SASS: `$ yarn add sass-loader node-sass`
- LESS: `$ yarn add less-loader less`
- Stylus: `$ yarn add stylus-loader stylus`

修改 `nuxt.config.js`:

```
export default {
  modules: [
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    scss: './assets/variables.scss',
    less: './assets/**/*.less',
    // sass: ...
  }
}
```

然后就可以随处直接使用定义过的变量或函数。


# 插件 nuxt.config.js->plugins:[]

### 全局插件注入和局部插件注入


##### 全局运行
nuxt.config.js, 里包含的代码都是全局的,相当于vue的main.js 打开网站就会调用

```json
  plugins: [
    { src: '~/plugins/both-sides.js' },  //both
    { src: '~/plugins/client-only.js' },
    { src: '~/plugins/server-only.js'}
  ]
```



##### 局部运行

局部页面的组件 指令 函数 过滤器 放到vue构造器里(切换到当前路由才会建立vue对象运行)


### 判断设备运行插件

```javascript
export default {
  plugins: [
    { src: '~/plugins/both-sides.js' },  //both
    { src: '~/plugins/client-only.js', mode: 'client' },
    { src: '~/plugins/server-only.js', mode: 'server' }
  ]
}

```

### 判断设备运行代码

```js
 if (process.server) {}
```

```js
 if (process.client) {}
```

# 按需加载element插件和css

##### 1下载依赖：
	先下载element-ui
	
	    npm install element-ui --save


 	
##### 2 创建插件配置文件
安装好以后，按照nuxt.js中的规则，你需要在 plugins/ 目录下创建相应的插件文件

在文件根目录创建(或已经存在)plugins/目录，创建名为：element-ui.js的文件，内容如下：
	
```js
import Vue from 'vue'

import { Button } from 'element-ui'    //引入Button按钮

export default ()=>{  	 Vue.use(Button)
	}
```
##### 3引入插件
```
	plugins:[
	'~/plugins/element-ui'
	]
````

  只在客户端用
  ```
	plugins:[
   	 {
        src:'~/plugins/element-ui',
        ssr:false    //只在客户端用
  	  }
	]
  ```
##### 4配置babel选项配置按需加载

如果使用按需引入，必须安装babel-plugin-component(官网有需要下载说明，此插件根据官网规则不	同，安装插件不同)


````
npm install babel-plugin-component --save-dev
````


在nuxt.config.js中，配置在build选项中，规则为官网规则：

````
	build: {

  babel: {
      "plugins": [["component", 
        {
          "libraryName": "element-ui",
           "styleLibraryName":"theme-chalk" //默认css分散包,按需加载,~theme"为element et sass生成工具的目录
         
        }
     ]]
    },


 	}
````


##### 5. element的sass编译器
解压`theme-chalk-master`到nuxt的根目录

![](./img/3.png)

修改gulpfile.js

````javascript

gulp.task('compile', function() {
  return gulp.src('./src/*.scss')
    .pipe(sass.sync())
    .pipe(autoprefixer({
      browsers: ['ie > 9', 'last 2 versions'],
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(gulp.dest('../theme')); //这里修改必须是根目录下theme不知道是谁的坑
});

gulp.task('copyfont', function() {
  return gulp.src('./src/fonts/**')
    .pipe(cssmin())
    .pipe(gulp.dest('../theme/fonts'));//这里修改必须是根目录下theme不知道是谁的坑
});

gulp.task('build', ['compile', 'copyfont']);

````

生成css命令

`npm run build `


# 根组件

### layout所有组件的父组件

![](./img/19.png)





-----
# nuxt.config.js



### 全局css

` cnpm i css-loader -S`

nuxt.config.js

```
css: [
    './assets/css/index.css',
  ]
```
### build

```
build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    loaders: {
      imgUrl: {limit: 20 * 1000},
    },
      styleResources: {
      /*预先引入到各个vue文件中*/
      less: ['./assets/less/variables.less', './assets/less/mixins/_mixins.less'],
      /*  options: {
          // See https://github.com/yenshih/style-resources-loader#options
          // Except `patterns` property
        }*/
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, {isClient}) {

      if (isClient) {
        console.log('客户端打包时运行')

      }
    }

  }
```

##### less支持(需要安装) 

```
yarn add less less-loader -D
```

##### styleResources

- 类型: `Object`
- 默认: `{}`

当您需要在页面中注入一些变量和`mixin`而不必每次都导入它们时，这非常有用。

Nuxt.js 使用 https://github.com/nuxt-community/style-resources-module 来实现这种行为。

您需要为css预处理器指定要包含的 模式 / 路径 ： `less`, `sass`, `scss` 或 `stylus`

您不能在此处使用**路径别名**(`~` 和 `@`)，

:warning: You cannot use path aliases here (`~` and `@`)，你需要使用相对或绝对路径。

安装 style-resources：

```
$ yarn add @nuxtjs/style-resources
```

根据需要安装：

- SASS: `$ yarn add sass-loader node-sass`
- LESS: `$ yarn add less-loader less`
- Stylus: `$ yarn add stylus-loader stylus`

修改 `nuxt.config.js`:

```
export default {
  modules: [
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    scss: './assets/variables.scss',
    less: './assets/**/*.less',
    // sass: ...
  }
}
```

然后就可以随处直接使用定义过的变量或函数。

# 上线

### 配置主机和端口

**nuxt.config.js配置context.env 注入到上下文对象**


```javascript
//context里注入的env,機器設置永久的HOST環境變量,則個地方才方便
  env: {
    HOST: "120.0.0.1"||process.env.HOST ,
    PORT: 3333

  },
```

axios使用

```javascript
export default function ({$axios,redirect,env}) {
  let axios = $axios;
  // 基本配置

   axios.defaults.baseURL = `http://${env.HOST}:${env.PORT}/api`;
   
```

server/index.js使用

```javascript
let config = require('../nuxt.config.js')
const host= config.env.HOST
const port= config.env.PORT
```

### 修改数据库地址



### pm2守护进程

```
 pm2 start npm --name "demo" -- run start

 package.json->    "start": "cross-env NODE_ENV=production node server/index.js",

```

```
NODE_ENV=production pm2 start server/index.js
```

```
NODE_ENV=production pm2 start pm2.json

```

# 错误

![1569154342601](img/1569154342601.png)

后端api写错了



![1571355328108](img/1571355328108.png)

mixin data属性未赋值