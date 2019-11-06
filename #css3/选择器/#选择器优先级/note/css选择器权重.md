# CSS选择器种类：
1. 标签名选择器     div { color：Red;}         /即页面中的各个标签名的css样式
2. 类选择器        .divClass {color:Red;}       /即定义的每个标签的class 中的css样式
3. ID选择器         #myDiv  {color:Red;}        /即页面中的标签的id
4. 后代选择器（类选择器的后代选择器）    
```css
 .divClass  span { color:Red;} 
 .divClass>span { color:Red;}
```

5. 兄弟选择器 `a+span{}`
6. 群组选择器   `div,span,img {color:Red} `   /即具有相同样式的标签分组显示
# 选择器的优先级

### 标签优先级

1. 级别10000 (直接在标签中的设置样式) `<div style="color:Red;"></div>`
2. 级别1000（ID选择器 ）  ` #myDiv{color:Red;}`
3. 级别100（类选择器） `.divClass{color:Red;}`
4. 级别10 （浏览器默认标签样式 | 标签选择器| div * 这类选择器 ) 
```html
<div>
<p>
hello
</p>
</div>
<style>
<!--在后面的权重高-->
p{color:Red;}
div *{ color:blue}
</style>
```
5. 级别1 继承样式   （ 继承而来的样式,浏览器默认标签样式没有设置过此样式,比如背景）  ` body{color:#000} ` ![img](img/20170727_2050.png) 

   

   不可继承的：`display、margin、border、padding、background、height、min-height、max- height、width、min-width、max-width、overflow、position、left、right、top、 bottom、z-index、float、clear、table-layout、vertical-align、page-break-after、 page-bread-before和unicode-bidi`

   所有元素可继承：`visibility和cursor`

   内联元素可继承：`letter-spacing、word-spacing、white-space、line-height、color、font、 font-family、font-size、font-style、font-variant、font-weight、text- decoration、text-transform、direction`

   块状元素可继承：`text-indent和text-align`

   列表元素可继承：`list-style、list-style-type、list-style-position、list-style-image`

   表格元素可继承：`border-collapse`

   

**例:**

​    比如 .divClass  span { color:Red;}   优先级别就是：10+1=11

```html

<div>
    <a href="#">
        <span></span>
        <!-- 级别5 最高权限选择器-->
        <p class="p1 p2 p3" id="p"
      style="color: #000"
        >first</p>

    </a>
</div>

<style>

    /*级别1:继承的样式   p继承a的样式权重最弱---------------------------------------------------------------------------------------*/

    a {
        color: yellow
    }

    /*级别2:标签选择器设置的样式-----------------------------------------------------------------------------------------------------------------*/
    /* a * 和p同级别,谁在后面谁生效*/

    a * {
        color: #ff0000
    }

    p {
        color: #aa0000
    }

    a p {
        color: #660000
    }


    /*级别3class选择器-----------------------------------------------------------------------------*/


    .p1 {
        color: #00ff00;
    }

    .p2 {
        color: #00aa00;
    }

    div .p1 {
        color: #007700;
    }

    div .p2 {
        color: #003300;
    }

    p.p3 {
        color: #001100;
    }

    /*级别4 id选择器----------------------------------------------------------*/


    #p {
        color: #0000ff;
    }
    a #p {
        color: #0000aa;
    }

</style>
```

### 同优先级受css顺序的影响

和css代码的顺序有关,谁在后面谁决定样式,和标签里的class的位置无关 

```html
<!--d2生效-->

<div class=" d2 d1"></div>

<style>
.d1{
color: red;
}
.d2{
color: blue;
}
</style>

```



# !import 提升

import的优先级最高, 加了!import,上面的样式都被覆盖,

需要更高的优先级标签+!import覆盖

