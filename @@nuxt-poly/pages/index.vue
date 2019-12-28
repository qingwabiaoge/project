<template>
  <div :class="$style.index">
    <el-row>
      <el-col :md="12">
        <a href="http://www.poty-tl.com/index.php">
          <img src="@/assets/images/index/1.jpg" alt="">
        </a>
      </el-col>
      <el-col :md="12">
        <nuxt-link to="/advantage/">
          <img src="@/assets/images/index/2.jpg" alt="">
        </nuxt-link>
      </el-col>
    </el-row>
    <footer>
      <a href="http://beian.miit.gov.cn/">沪ICP备16055143号</a>
    </footer>
  </div>


</template>

<script>
  export default {
    layout: 'none'
  }

</script>

<style module lang="less">
  .index {

    img {
      width: 100%;
      max-width: 100%;
      object-fit: cover;
    }

    footer {
      text-align: center;
      position: fixed;
      width: 100%;
      bottom: 30px;
    a{
      color: #000;
    }
    }
  }

</style>
