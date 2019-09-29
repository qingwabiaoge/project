<template>
  <div>
    <el-row
      class="inverse-wrap clearfix background-black"
      style="height: 64px; line-height: 64px">

      <el-col :span="8"><span class="padding-left">{{$store.state.global.sitename}}</span></el-col>
      <el-col :span="8" class="text-center">
        <div class="h1 text-bold inline padding-right-smaller">{{$store.state.components.brand.subtitle}}</div>
        <img v-lazy="$store.state.global.logo" :alt="$store.state.global.sitename">
      </el-col>
      <el-col :span="8" class="text-right ">
        <el-tooltip class="item"
                    effect="dark"
                    :content="$store.state.components.contact.address"
                    placement="bottom"
        >
          <i class="iconfont icon-coordinates_fill padding-right " style="color: #666"></i>
        </el-tooltip>
        <el-popover
          placement="top-start"
          title=""
          width="200"
          trigger="hover"
          content="">
          <i slot="reference" class="iconfont icon-weixin padding-right" style="color: #aaa"></i>
          <img v-lazy="$store.state.global.qcode" :alt="$store.state.global.sitename">
        </el-popover>
        <el-tooltip class="item"
                    effect="dark"
                    :content="$store.state.components.contact.tel"
                    placement="bottom"
        >
          <i class="iconfont icon-phone padding-right" style="color: #aaa"></i>
        </el-tooltip>
      </el-col>
    </el-row>
    <el-row class="text-center">
      <el-col>

        <nuxt-link to="/" class="hover-underline inline "
                   style="padding:30px 0; margin-right: 30px">首页
        </nuxt-link>
        <nuxt-link to="/brand" class="hover-underline inline "
                   style="padding:30px 0; margin-right: 30px">关于{{$store.state.components.brand.subtitle}}
        </nuxt-link>
        <nuxt-link to="/join" class="hover-underline inline "
                   style="padding:30px 0; margin-right: 30px">加盟支持
        </nuxt-link>
        <nuxt-link :to="{ path: '/produces/'}" class="hover-underline inline "
                   style="padding:30px 0; margin-right: 30px">艺术产品
        </nuxt-link>
        <nuxt-link :to="{ path: '/article/公司新闻'}" class="hover-underline inline "
                   style="padding:30px 0; margin-right: 30px">新闻中心
        </nuxt-link>

        <nuxt-link :to="{ path: '/contact'}" class="hover-underline inline "
                   style="padding:30px 0; margin-right: 30px">联系我们
        </nuxt-link>


      </el-col>
    </el-row>
  </div>
</template>


