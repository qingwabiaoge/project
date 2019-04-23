<template>
  <div class="footer-a text-center">
    <div class="container">
      <div class="row">
        <nav class="col-xs-6 col-xs-offset-3 "><a>关于我们</a><a>联系我们</a><a>网站模板</a></nav>
      </div>
      <div class="row"><p> Designed and built with all the love in the world by @mdo and @fat. Maintained by the core team with the help of our contributors. <br>
        <a href="http://www.miitbeian.gov.cn/">京ICP备17022505号-1</a> </p></div>
    </div>
  </div>

</template>

<script>
    export default {}
</script>

<style lang="less" scoped>
  //footer-a
  @footer-a-bg-color:            #1b1b1b;//整体背景颜色
  @footer-a-padding:            50px;//footer-a整体padding
  @footer-a-color:#fff;  //链接颜色
  @foot-grow1-margin:30px; //第一行链接间的宽度

  .footer-a {
    background: @footer-a-bg-color;
    padding: @footer-a-padding;
    nav{
      color: @footer-a-color;
      a {  margin-right: @foot-grow1-margin;
        color: @footer-a-color;
      }
      border-bottom: 1px solid @global-color-primary;
      padding-bottom: 18px;
      margin-bottom: 18px;
    }
    p{
      &,a{
        color:darken(@footer-a-color,50%);}
    }
  }
</style>
