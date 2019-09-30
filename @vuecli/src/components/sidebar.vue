<template>
  <div>

    <el-menu

      class="el-menu-vertical-demo "
      @open="handleOpen"
      default-active="$route.path"
      @close="handleClose"
      router>
<!--      <el-submenu index="admin">
        <template slot="title">
          <i class="el-icon-produce"></i>
          <span>商品</span>
        </template>


        <el-menu-item
          v-for="item in produceCategory"
          :key="item.title"
          :index="`/produces/${item.id}`">
          {{item.title}}
        </el-menu-item>


      </el-submenu>-->

      <el-menu-item index="/produces">
        <i class="el-icon-goods"></i>
        <span slot="title">产品</span>
      </el-menu-item>
      <el-menu-item index="/articles">
        <i class="el-icon-tickets"></i>
        <span slot="title">新闻</span>
      </el-menu-item>
 <!--     <el-submenu index="/article/">
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


      </el-submenu>-->



      <el-menu-item index="/component">

        <i class="el-icon-picture"></i>
        <span slot="title">组件&栏目</span>

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
        <span slot="title">全局配置</span>
      </el-menu-item>
    </el-menu>

  </div>
</template>

<script>


  export default {
    name: "sidebar",
    data() {
      return {
        // produceCategory: this.$store.getters['components/produceCategory'],
        isCollapse: true,
        // articleCategory: this.$store.getters['components/articleCategory']

      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },

  }
</script>

<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 100%;

  }
</style>
