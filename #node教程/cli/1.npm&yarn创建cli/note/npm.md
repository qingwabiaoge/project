# npm是什么?

npm是node自带的一个打包器插件,

通过npm上传代码到npm仓库 

通过npm i 下载安装线上npm仓库的代码到本地


# 安装npm


### 查看版本

    npm -v

### 升级npm

    npm install npm@latest -g


### 配置npm的path
![1](./img/2.png)





# 安装模块

### 安装到全局文件夹

 原理npm install xxx-cli -g 安裝xxx-cli到npm和yarn的目录下，这些目录已经设置了环境变量Path

```
npm install webpack -g 
yarn global add webpack 
```

### 安装到项目文件夹

```
npm i nuxt -S //安装并保存到webpack.json生产环境配置
yarn add nuxt 
```

### 安装在项目文件夹和引入module对象


```
import koa from 'koa'
```
npm会读取"./node_modules/koa/package.json"文件

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
yarn add package-name@1.2.3 会从 registry 里安装这个包的指定版本。
yarn add package-name@tag 会安装某个 “tag” 标识的版本（比如 beta、next 或者 latest）
yarn add package-name 会安装 latest 最新版本。
```
```
~ 会匹配最近的小版本依赖包，比如~1.2.3会匹配所有1.2.x版本，但是不包括1.3.0
^ 会匹配最新的大版本依赖包，比如^1.2.3会匹配所有1.x.x的包，包括1.3.0，但是不包括2.0.0
* 这意味着安装最新版本的依赖包
```
### 局部安裝到开发模式

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

# 自己动手新建cli模块

> 运行原理: 间接运行了note test.js

### 建立自定义全局cli模块

1. npm init创建项目和package.json

2. 修改package.json文件,设置命令名字

```json
{
  "name": "test",
   "bin": {
    "test": "bin/test.js"
  }
}

```
3. 建立/bin/test.js

```js
#!/usr/bin/env node   //表示依靠node解析本文件

console.log("hello world");
```

4. npm link 命令和复制到C:\Users\Administrator\AppData\Roaming\npm\,       本质是mklink

```
$ npm link
//输出为
// C:\Users\Administrator\AppData\Roaming\npm\test - C:\Users\Administrator\AppData\Roaming\npm\node_modules\test\bin\hello.js
//C:\Users\Administrator\AppData\Roaming\npm\node_modules\test - E:\github-code\test
```

手动复制文件夹过去也可以

5. 运行

命令行  test

### 建立局部自定义全局cli模块

见code

# 运行模块

### 命令行可以运行npm path下的cli**命令**

```
 node 1.js
 
 npm -v
 
 npm run xxx
 
 webpack  
 
 nodemon xxx
```

### npm run xxx 运行cli的原理

package.json设置dev命令

```json
//package.json
{
  "name": "code",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "nuxt",
    }
}
```

`npm run dev` 时, 

会搜索命令行有没有"nuxt"命令 

如果没有会运行当前目录的`./node_modules/.bin/nuxt.cmd`

```cmd
@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\@nuxt\cli\bin\nuxt-cli.js" %*
) ELSE (
  @SETLOCAL
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\..\@nuxt\cli\bin\nuxt-cli.js" %*
)
```

对应目录的  nuxt-cli.js文件内容

```js
//表示靠node运行下边的代码
#!/usr/bin/env node

require('../dist/cli.js').run()
  .catch((error) => {
    require('consola').fatal(error)
    require('exit')(2)
  })
```

