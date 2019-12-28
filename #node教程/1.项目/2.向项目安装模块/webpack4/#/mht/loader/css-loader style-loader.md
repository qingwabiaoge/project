### css-loader style-loader
* 作用:

那么，css-loader和style-loader是干什么用的呢？
引用《入门webpack》中的原文：css-loader使你能够使用类似@import和url（...）的方法实现require的功能，style-loader将所有的计算后的样式加入页面中，二者组合在一起使你能够把样式表嵌入webpack打包后的js文件中。

因此，我们这样配置后，遇到后缀为.css的文件，webpack先用css-loader加载器去解析这个文件，遇到“@import”等语句就将相应样式文件引入（所以如果没有css-loader，就没法解析这类语句），最后计算完的css，将会使用style-loader生成一个内容为最终解析完的css代码的style标签，放到head标签里。



* 安装:

```
 cnpm install style-loader --save-dev

 cnpm install css-loader --save-dev
```
* webpack.confige.js

需要注意的是，loader是有顺序的，webpack肯定是先将所有css模块依赖解析完得到计算结果再创建style标签。因此应该把style-loader放在css-loader的前面（webpack loader的执行顺序是从右到左）

```

 rules:[

              {
                     test: /\.css$/,
                     use: [
                         {loader: 'style-loader'},
                         {
                             loader: 'css-loader',
                             options: {
                                 modules: true
                             }
                         }
                     ]
                 },

   ]
````
