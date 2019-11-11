# transition作用

first-section是一个类, first-section:hover算另外一个类 叫**伪类**

```
<script src="https://cdn.bootcss.com/vue/2.5.17-beta.0/vue.js"></script>

<div id="app">

    <section class="first-section">section</section>

    <section
            @mouseover="isRotate=true"
            @mouseleave="isRotate=false"
            :class="{rotate:isRotate}">section
    </section>


</div>

<script>
    new Vue({data: {isRotate: false}}).$mount('#app')

</script>
<style>
    section {
        display: inline-block;
        transition: all 1s;
    }

    .rotate, .first-section:hover {
        transform: rotate(90deg)
    }

</style>

```



| 事件                              | 添加或删除类                                       | transition                                                   |
| --------------------------------- | -------------------------------------------------- | ------------------------------------------------------------ |
| first-section的css-hover事件,     | 为first-section添加了一个伪类section:hover         | 在css中为section的每个带动画的下级元素__分别添加__transition |
| first-section的css-hover取消事件, | 为first-section减少了一个伪类.为section:hover      | --                                                           |
| 第二个section的js-mousehover事件  | 为第二个section或者__其他标签__添加了一个类.rotate | 在css中为.rotate的每个带动画的下级元素__分别添加__transition |
| 第二个section的js-mouseleave事件  | 为第二个section或者__其他标签__减少了一个类.rotate | --                                                           |

```html

```

# animate的作用

就是一个带动画效果的类

