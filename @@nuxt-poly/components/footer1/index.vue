<template>
  <div class="footer">

    <div class="container">

      <div class="clearfix border-bottom">
        <ul class="nav pull-left">
          <li v-for="item in data.children">
            <nuxt-link :to="data.href">产品</nuxt-link>
          </li>

        </ul>
        <ul class="nav pull-right">
          <li>
            <a href="" target="_blank">
              <i class="iconfont ico-phone"></i> 访问手机版
            </a>

          </li>

          <li>
            <a href="">
              <popover>
                <i class="iconfont icon-weixin
"></i> 关注公众号
                <div slot="popover" style="width: 200px">
                  <img :src="data.qcode" alt="">
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
              ><i class="iconfont icon-weixin"></i>关注公众号

                <span> <img src="data.qcode" alt="">  </span>
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
  import mixin from '@/mixins/conponent-mixin'

  export default {
    mixins: [mixin],
  }
</script>
<style lang="less" scoped>
  @nav-link-padding: 20px;
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
