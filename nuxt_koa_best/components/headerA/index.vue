<template>
  <div>
    <el-row
      class="uk-inverse uk-clearfix "

      style="height: 64px; line-height: 64px">

      <el-col :md="8" class="hidden-xs-only"><span
        class="uk-padding-left">{{$store.state.config.global.sitename}}</span></el-col>
      <el-col :md="8" class="uk-text-center">
        <h1 class="uk-inline uk-padding-right-smaller">{{$store.state.config.global.ename}}</h1><img
        v-lazy="$store.state.config.global.logo" :alt="$store.state.config.global.sitename">
      </el-col>
      <el-col :md="8" class="uk-text-right hidden-xs-only">
        <el-tooltip class="item"
                    effect="dark"
                    :content="$store.state.config.global.address"
                    placement="bottom"
        >
          <i class="iconfont icon-coordinates_fill uk-padding-right " style="color: #666"></i>
        </el-tooltip>
        <el-popover
          placement="top-start"
          title=""
          width="200"
          trigger="hover"
          content="">
          <i slot="reference" class="iconfont icon-weixin uk-padding-right" style="color: #aaa"></i>
          <img v-lazy="$store.state.config.global.qcode" :alt="$store.state.config.global.sitename">
        </el-popover>
        <el-tooltip class="item"
                    effect="dark"
                    :content="$store.state.config.global.tel"
                    placement="bottom"
        >
          <i class="iconfont icon-phone uk-padding-right" style="color: #aaa"></i>
        </el-tooltip>
      </el-col>
    </el-row>
    <nav :class="$style.nav">
      <div class="container">

        <nuxt-link to="/" class="hover-underline uk-inline "
        >首页
        </nuxt-link>
        <nuxt-link to="/brand" class="hover-underline uk-inline "
        >关于{{$store.state.config.global.ename}}
        </nuxt-link>
        <nuxt-link to="/baidu" class="hover-underline uk-inline "
        >加入百事得
        </nuxt-link>
        <nuxt-link :to="{ path: '/goodss/'}" class="hover-underline uk-inline "
        >艺术产品
        </nuxt-link>
        <nuxt-link :to="{ path: '/news/公司新闻'}" class="hover-underline uk-inline "
        >新闻中心
        </nuxt-link>

        <nuxt-link :to="{ path: '/contact'}" class="hover-underline uk-inline "
        >联系我们
        </nuxt-link>

      </div>
    </nav>


  </div>
</template>

<style module lang="less">

  .nav {
    border-top: 1px solid #333;
    border-bottom: 1px solid #333;
    > div {
      /*font-size: 16px;*/
      text-transform: uppercase;
      white-space: nowrap;
      overflow-x: auto;
      display: flex;
      justify-content: space-between;
      > a {

        display: inline-block;
        padding: 30px 10px;
      }

    }
  }
</style>
