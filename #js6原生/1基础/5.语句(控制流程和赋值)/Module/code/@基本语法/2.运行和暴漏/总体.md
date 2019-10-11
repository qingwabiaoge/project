# babel转化

### module.exports 原理

```js
 module.exports = {
    a: 1,
    b:2
}
```
上面代码在babel-node包装为

```js
 module.exports = { a: 1, b: 2, default: { a: 1, b: 2 } }
```
上面代码又等价于

```js
export default{
  a:1,b:2
}

```
**所以可以用下边代码引入**

```js
import obj from './export'
//{ a: 1, b: 2}
```

```js
import * as obj from './module.exports'
console.log(obj) //{ a: 1, b: 2, default: { a: 1, b: 2 } }
```

### export default 原理

```js
export default {
  a: 1,
  b: 2
}
```

上面带的代码在babel-node包装为

```js
  module.exports={

     default:{
                a:1,
                 b:2
               }
             }
}
```

**所以可以用下边代码引入**

```js
let obj = require('./export-default')
console.log(obj) //{ default: { a: 1, b: 2 } }
console.log(obj.default.b)
```

```js
const {default: {a,b}} = require('./export-default')
console.log(b) //a,b

```

# export{a,b}原理

```js
const a=1
const b=2
export {a,b}

```

在babel-node被封装为

```js
  module.exports={

                a:1,
                 b:2
}
```

**所以可以用下边代码引入**

```js
const obj = require('./export.js')
console.log(obj)
```

```js
const {a, b} = require('./export.js')
console.log(a, b)
```



