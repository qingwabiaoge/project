### 本质

Vue.use( )的参数

一个回调函数

```javascript
(ctx,next)=>{
    
    next()//下一个中间件运行
}
```

