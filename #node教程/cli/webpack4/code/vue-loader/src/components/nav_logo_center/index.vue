<template>
  <div class="nav_logo_center uk-background-default ">
    <a href="/" class="hover-underline active">首页</a>
    <a href="#" class="hover-underline">产品</a>
    <a href="#" class="hover-underline">品牌</a>



    <a class="logo ">
      <h1 ><img  src="~assets/pic/logo.png" alt=""></h1>
    </a>




    <a href="#" class="hover-underline">联盟</a>
    <a href="#" class="hover-underline">商城</a>

  </div>
</template>

<script>
  export default {}
</script>

<style lang="less" scoped>
  @nav_logo_center-height :100px;  //nav高度
  @nav_logo_center-link-padding:0 20px; //链接间距

  .nav_logo_center {
    & {
      height:@nav_logo_center-height;
      line-height: @nav_logo_center-height;
      text-align: center;
    }
    a:not(.logo) {
      display: inline-block;
      padding: @nav_logo_center-link-padding;

    }
    h1 {
      display: inline-block
    }
    img {
      height: @nav_logo_center-height - 20;
    }

  }

</style>
