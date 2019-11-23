
# component

### 实质

就是一种函数封装,函数解耦


# slot

### 实质

是一种解藕机制,比组件更完全的解耦机制,不用父子嵌套,父不依赖子就可以运行

### 使用场景

##### header组件嵌套导航组件



##### footer 嵌套导航 嵌套留言 嵌套联系方式 嵌套备案信息


```html
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

### slot作用

  slot 指定位置留给其他组件

  slot子组件写80%然后给父组件写

  子组件指定位置交给父组件设置内容


### 作用域插槽:

带数据的插槽,给数据再自定义dom

# filter

### 实质:

解耦的函数
