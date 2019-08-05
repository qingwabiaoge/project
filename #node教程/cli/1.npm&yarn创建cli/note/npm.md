

# npm是什么?

>npm是node自带的一个打包器插件,

>通过npm上传代码到npm仓库 

>通过npm i 下载安装线上npm仓库的代码到本地


# 安装npm


##### 版本

    npm -v

##### 升级

    npm install npm@latest -g


##### 配置npm的path
![1](./2.png)


# 创建模块和package.json

    npm init
    npm init -y 默认



# 安装模块和运行模块

###  全局安装和运行cli模块
> 原理npm install xxx-cli -g 安裝xxx-cli到npm和yarn的目录下，这些目录已经设置了环境变量Path

全局安装cli模块,

```
yarn global add webpack 
npm install webpack -g 
```
全局运行的dos命令

```
 webpack  
 
 nodemon xxx
```



### 局部安装和运行cli模块


局部安装cli模块
```
npm i nuxt

yarn add webpack 

npm i nuxt -S //安装并保存到webpack.json生产环境配置


npm i xxx@latest  //安装最后一个版本

```
局部安裝到開發模式

```

npm i nuxt -D //安装并保存到webpack.json开发环境配置

yarn add webpack -D
```

局部运行cli模块




>比较特别的是，npm run新建的这个 Shell，会将当前目录的node_modules/.bin子目录加入PATH变量，执行结束后，再将PATH变量恢复原样。

```
 npm run xxx  运行局部安装的cli模块
 "dev": "cross-env NUXT_HOST=0.0.0.0 NUXT_PORT=3333 nuxt",
"dev": "nuxt"
 npm run dev

```

 
```
    "dev": "set NODE_ENV=production node 1.js"  
     npm run dev
```

### 安装指定版本
```html
npm i xxx@2
npm i xxx@latest
```
```
yarn add package-name 会安装 latest 最新版本。
yarn add package-name@1.2.3 会从 registry 里安装这个包的指定版本。
yarn add package-name@tag 会安装某个 “tag” 标识的版本（比如 beta、next 或者 latest）

```


### 二次安装写好的webpack.json
```
npm i
```


# 局部安装和引入对象模块(只能局部)
```
import axios from 'axios'//npm会自动搜索

```


# 删除模块

```
 yarn remove webpack # yarn
npm uninstall webpack --save # npm 可以指定 --save | --save-dev
```

# 更新模块版本
```
 npm update

yarn upgrade
```


# 建立自定义模块

### 1.npm init

### 2.建立/bin/test.js
```
#!/usr/bin/env node   //表示依靠node解析

console.log("hello world");
```

### 修改package.json文件,设置命令名字

```json
{
  "name": "test",
   "bin": {
    "test": "bin/test.js"
  }
}

```
###  npm link 命令

本质是mklink
```

$ npm link
//输出为
// C:\Users\Administrator\AppData\Roaming\npm\test -> C:\Users\Administrator\AppData\Roaming\npm\node_modules\test\bin\hello.js
//C:\Users\Administrator\AppData\Roaming\npm\node_modules\test -> E:\github-code\test
```

