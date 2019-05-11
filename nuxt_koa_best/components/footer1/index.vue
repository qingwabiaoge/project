<template>
  <div class="footer">

    <div class="container">

      <div class="clearfix border-bottom">
        <ul class="nav pull-left">
          <li><a href="#">产品</a></li>
          <li><a href="#">品牌</a></li>
          <li><a href="#">故事</a></li>
          <li><a href="#">联盟</a></li>
          <li><a href="#">商城</a></li>

        </ul>
        <ul class="nav pull-right">
          <li>
            <a href="" target="_blank">
              <img src="~/assets/images/phone.svg" alt="">  访问手机版
            </a>

          </li>

<li>
  <a href="">
    <popover>
     <i class="iconfont icon-weixin
"></i> 关注公众号
      <div slot="popover"style="width: 200px">
        <img src="~/assets/images/qcode.png" alt="">
        <br>
        长按关注公众号
      </div>
    </popover>

  </a>



</li>


          <li>
            <a>
            <v-tooltip top

              width="150"
            ><img src="~/assets/images/weixin.svg" alt="">关注公众号

            <span > <img src="~/assets/images/qcode.png" alt="">  </span>
            </v-tooltip>
            </a>
          </li>

        </ul>
      </div>
      <h6 class=" margin-medium-top">粤ICP备15111100号-1 | 粤ICP备15111100号 广东省通信管理局ICP备案　　</h6>

      <P class=" margin-top-small">Copyright © 2016　V.S HOLIDAY 时尚男装　All Rights Reserved.</P>
    </div>

  </div>

</template>

<script>
  export default {
    data: function () {
      return {

      }
    }

  }
</script>

<style lang="less" scoped>
  @nav-link-padding :20px;
  .footer {
    margin-top: 50px;
    padding: 100px 0 50px;
    line-height: 100%;
    font-size: 12px;
    background: #fff;
    color: #636363;
    .nav {

      &:extend(.clearfix all);
      > li {
        float: left;
        position: relative;
        display: block;

        > a {
          position: relative;
          display: block;
          padding: @nav-link-padding;


        }

      }

    }
  }
</style>
