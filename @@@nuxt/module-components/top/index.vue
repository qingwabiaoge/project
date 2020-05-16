<template>
  <div class="top">

    <div class="container">
      <el-row>
        <el-col :md="12" class="left">

          {{'welcome to'|translate}} {{global.title}}
        </el-col>

        <el-col :md="12" class="right">
          <svg aria-hidden="true" class="svg">
            <use xlink:href="#icon-chinese"></use>
          </svg>
          <a href="http://www.bonniena.com/">
            中文
          </a>
          <svg aria-hidden="true" class="svg">
            <use xlink:href="#icon-english"></use>
          </svg>
          <a href="http://senboma.http6.net/">
            english
          </a>

          <svg aria-hidden="true" class="svg">
            <use xlink:href="#icon-message"></use>
          </svg>
          <a @click.prevent.stop="goBottom()">
            {{'message'|translate}}

          </a>

        </el-col>

      </el-row>
    </div>

  </div>
</template>
<script>
import mixin from '@/mixins/conponent-mixin'

export default {
  mixins: [mixin]
}
</script>
<style lang="less" scoped>

  .top {
    background: #f5f5f5;
    color: #999;
    height: 40px;
    line-height: 40px;
    font-size: 12px;
    text-transform: uppercase;

    .left {
      text-align: left;
      @media (max-width: @global-breakpoint-phone-max) {
        display: none;
      }
    }
  ;

    .right {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      .svg {

        height: 1.8em;
        width: 1.8em;
        margin-right: 3px;
      }
    ;

      a {
        margin-right: 17px;
      }
    }

  }

</style>
