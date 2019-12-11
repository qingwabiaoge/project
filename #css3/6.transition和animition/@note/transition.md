# transition作用

```html
<script src="https://cdn.bootcss.com/vue/2.5.17-beta.0/vue.js"></script>

<div id="app">

  <button class="btn">button</button>
  
  <button
    @mouseover="isRotate=true"
    @mouseleave="isRotate=false"
    :class="{rotate:isRotate}">button
  </button>


</div>

<script>
  new Vue({data: {isRotate: false}}).$mount('#app')

</script>
<style>
  .rotate, .btn:hover {
    transform: rotate(90deg)
  }

  button {
    transition: all 1s;
  }

</style>

```

### hover伪类

.btn是一个类

.btn:hover算另外一个类 叫**伪类**


| 事件                             | 添加或删除类                                      | transition           |
| -------------------------------- | ------------------------------------------------- | -------------------- |
| 第一个button的css-hover事件,     | 为第一个button添加了一个伪类button:hover          | 为增加类添加过渡补间 |
| 第一个button的css-hover取消事件, | 为第一个button减少了一个伪类button:hover          | 为减少类添加过渡补间 |
| 第二个button的js-mousehover事件  | 为第二个button或者__其他标签__添加了一个类.rotate | 为增加类添加过渡补间 |
| 第二个button的js-mouseleave事件  | 为第二个button或者__其他标签__减少了一个类.rotate | 为减少类添加过渡补间 |

# animate的作用

就是一个带动画效果自动补间的类

