## 安装babel

`cnpm install -g babel-cli `

## babel配置文件
通过.babelrc来配置

```
 cnpm install babel-preset-es2015 --save-dev
```
```
{
 "presets" : ["es2015" ],
 "plugins" : [ ]
}
```
presets用来存放一些预设

plugins用来存放一些插件


## 运行
我们可以通过 -o (--out-file) 参数来编译一个文件

`babel es6.js -o es5.js / babel es6 --out-file es5.js`

如果我们想编译整个目录 -d (--out-dir)参数

`babel  src -d build / babel  src --out-dir build`

