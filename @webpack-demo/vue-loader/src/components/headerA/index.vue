<template>
  <div>
    <el-row
      class="uk-inverse uk-clearfix "
      :class="$style.nav"
      style="height: 64px; line-height: 64px">

      <el-col :span="8"><span class="uk-padding-left">{{$store.state.config.global.sitename}}</span></el-col>
      <el-col :span="8" class="uk-text-center">
        <h1 class="uk-inline uk-padding-right-smaller">{{$store.state.config.global.ename}}</h1><img
        v-lazy="$store.state.config.global.logo" :alt="$store.state.config.global.sitename">
      </el-col>
      <el-col :span="8" class="uk-text-right ">
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
    <el-row class="uk-text-center">
      <el-col>
        <nuxt-link :to="{ path: '/'}" class="hover-underline uk-inline "
                   style="padding:30px 0; margin-right: 30px">首页
        </nuxt-link>
        <nuxt-link :to="{ path: '/brand'}" class="hover-underline uk-inline "
                   style="padding:30px 0; margin-right: 30px">关于{{$store.state.config.global.ename}}
        </nuxt-link>
        <nuxt-link :to="{ path: '/join'}" class="hover-underline uk-inline "
                   style="padding:30px 0; margin-right: 30px">加盟支持
        </nuxt-link>
        <nuxt-link :to="{ path: '/goodss/'}" class="hover-underline uk-inline "
                   style="padding:30px 0; margin-right: 30px">艺术产品
        </nuxt-link>
        <nuxt-link :to="{ path: '/公司新闻'}" class="hover-underline uk-inline "
                   style="padding:30px 0; margin-right: 30px">新闻中心
        </nuxt-link>

        <nuxt-link :to="{ path: '/contact'}" class="hover-underline uk-inline "
                   style="padding:30px 0; margin-right: 30px">联系我们
        </nuxt-link>



      </el-col>
    </el-row>
  </div>
</template>

<style module lang="less">

</style>
