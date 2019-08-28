

# npm是什么?

>npm是node自带的一个打包器插件,

通过npm上传代码到npm仓库 

通过npm i 下载安装线上npm仓库的代码到本地


# 安装npm


### 版本

    npm -v

### 升级

    npm install npm@latest -g


### 配置npm的path
![1](./2.png)


# 创建模块和package.json

    npm init
    npm init -y 默认

# 安装和运行

### cli模块安装到全局文件夹

 原理npm install xxx-cli -g 安裝xxx-cli到npm和yarn的目录下，这些目录已经设置了环境变量Path

##### 安装

```
yarn global add webpack 
npm install webpack -g 
```

##### 命令行运行的cli**命令**

```
 npm -v
 
 npm run xxx
 
 webpack  
 
 nodemon xxx
```

### cli模块安装到项目文件夹

##### 安装

```
npm i nuxt-S //安装并保存到webpack.json生产环境配置

yarn add webpack 

```


##### 命令行npm run test,运行安装到项目文件夹的cli模块

`npm run test`时,本质会运行`./node_modules/.bin/test.cmd`

```json
{
  "name": "code",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "test",
    }
```

```
//test.cmd
@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\cs\index.js" %*
) ELSE (
  @SETLOCAL
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\..\cs\index.js" %*
)
```

##### 也可以放置全局命令


```
"dev": "set NODE_ENV=production node 1.js"  
npm run dev
```



### 在项目文件夹安装和引入module


```
import axios from 'axios'
```
npm会读取"./node_modules/axios/package.json"文件

```
{
  "name": "koa",
  "version": "2.8.1",
  "description": "Koa web app framework",
  "main": "lib/application.js", //真正的koa对象文件
  "scripts": {
    "test": "egg-bin test test",
    "test-cov": "egg-bin cov test",
    "lint": "eslint benchmarks lib test",
    "bench": "make -C benchmarks",
    "authors": "git log --format='%aN <%aE>' | sort -u > AUTHORS"
  },
  }
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

### 局部安裝到開發模式

```
npm i nuxt -D //安装并保存到webpack.json开发环境配置

yarn add webpack -D
```

### 二次安装写好的webpack.json

```
npm i
yarn install
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

# 新建cli模块

运行原理: 间接运行了note test.js

### 建立全局自定义cli模块

##### 1.npm init

##### 2.建立/bin/test.js
```
#!/usr/bin/env node   //表示依靠node解析本文件

console.log("hello world");
```

##### 修改package.json文件,设置命令名字

```json
{
  "name": "test",
   "bin": {
    "test": "bin/test.js"
  }
}

```
#####  npm link 命令

本质是mklink
```
$ npm link
//输出为
// C:\Users\Administrator\AppData\Roaming\npm\test - C:\Users\Administrator\AppData\Roaming\npm\node_modules\test\bin\hello.js
//C:\Users\Administrator\AppData\Roaming\npm\node_modules\test - E:\github-code\test
```

##### 运行

命令行  test

### 建立本地自定义cli模块

见code