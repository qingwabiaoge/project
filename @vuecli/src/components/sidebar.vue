<template>
  <div>

    <el-menu

      class="el-menu-vertical-demo "
      @open="handleOpen"
      default-active="$route.path"
      @close="handleClose"
      router>
      <el-submenu index="admin">
        <template slot="title">
          <i class="el-icon-goods"></i>
          <span>商品</span>
        </template>


        <el-menu-item
          v-for="item in goodsCategory"
          :key="item.title"
          :index="`/goodss/${item.id}`">
          {{item.title}}
        </el-menu-item>


      </el-submenu>

      <el-submenu index="/article/">
        <template slot="title">
          <i class="el-icon-tickets"></i>
          <span>新闻</span>
        </template>

        <el-menu-item
          v-for="item in articleCategory"
          :key="item.title"
          :index="`/articles/${item.id}`">
          {{item.title}}
        </el-menu-item>


      </el-submenu>

      <!--   <el-menu-item index="/article/单页">
           <i class="el-icon-document"></i>
           <span slot="title">单页</span>
         </el-menu-item>
   -->
      <!--
            <el-menu-item index="/component">
              <i class="el-icon-picture"></i>
              <span slot="title">组件</span>
            </el-menu-item>-->
      <el-menu-item index="/component">
        <i class="el-icon-picture"></i>
        <span slot="title">新组件</span>
      </el-menu-item>


      <el-menu-item index="/message">
        <i class="el-icon-phone"></i>
        <span slot="title">  留言</span>
      </el-menu-item>
      <!--      <el-submenu index="/">
              <template slot="title">
                <i class="el-icon-star-on"></i>
                <span>活动</span>
              </template>

              <el-menu-item index="/">其他活动</el-menu-item>


            </el-submenu>-->


      <!--<el-menu-item index="/category">-->
      <!--<i class="el-icon-date"></i>-->
      <!--<span slot="title">栏目管理</span>-->
      <!--</el-menu-item>-->
      <!--  <el-menu-item index="/contact">
          <i class="el-icon-setting"></i>
          <span slot="title">联系我们</span>
        </el-menu-item>-->
      <el-menu-item index="/global">
        <i class="el-icon-setting"></i>
        <span slot="title">全局</span>
      </el-menu-item>
    </el-menu>

  </div>
</template>

<script>
  import config from '@/config'

  export default {
    name: "sidebar",
    data() {
      return {
        goodsCategory: this.$store.getters['oricomponents/goodsCategory'],
        isCollapse: true,
        articleCategory: this.$store.getters['oricomponents/articleCategory']

      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 100%;

  }
</style>
