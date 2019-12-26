# 普通插槽

### 本质

回调参数 slot( )

### 使用场景

按钮等无状态组件


# 作用域插槽

### 特点

slot里的组件是可以直接获得page组件作用域里的数据,

可以通过v-slot获得子组件指定的数据

### 本质

回调参数 slot(p1 )


### 作用

进一步解耦,原生组件获得父节点组件的数据

### 使用场景

表格组件 自定义按钮

header可以节点嵌套导航组件

footer可以节点嵌套导航组件 二维码组件 留言组件

```
<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1">处理中心</el-menu-item>
  <el-submenu index="2">
    <template slot="title">我的工作台</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title">选项4</template>
      <el-menu-item index="2-4-1">选项1</el-menu-item>
      <el-menu-item index="2-4-2">选项2</el-menu-item>
      <el-menu-item index="2-4-3">选项3</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="3" disabled>消息中心</el-menu-item>
  <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
</el-menu>
```

# provide/inject

### 使用场景:嵌套取值

```html
  <l-form disabled>
    <l-form-item >
      <l-input>

      </l-input>

    </l-form-item>

  </l-form>
```

### 作用

 组件获得父dom节点以及祖先dom组件的数据

 (对比作用域插槽: 作用域插槽为组件获得父节点组件的数据)


### 注意

provide使用父节点组件的数据,是对象才能响应式 普通值不行

