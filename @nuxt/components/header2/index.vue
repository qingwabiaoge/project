<template>


  <div class="header">

    <div class="top">

      <div class="container">
        <el-row>
          <el-col :md="12" class="left">

            Welcome To {{$store.getters.components.brand.title}}
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
            <a href="#">
              message

            </a>

          </el-col>

        </el-row>
      </div>

    </div>

    <div class="banner container">
      <el-row>
        <el-col :md="12" class="left">
          <img :src="$store.state.global.logo" alt="$store.state.components.brand.title">
        </el-col>

        <el-col :md="12" class="right  hidden-xs-only" >

          <search  @search="search"></search>
        </el-col>

      </el-row>

    </div>


    <nav class="nav">
      <div class="container">
        <nuxt-link to="/">首页</nuxt-link>
        <nuxt-link v-for="item in $store.getters.categorys" :to="item.href||'#'" class="hover-underline" :key="item.title">{{item.title}}
        </nuxt-link>
      </div>
    </nav>


  </div>

</template>

<style lang="less" scoped>
  .header {
    background: #fff
  }

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

  .banner {
    .left {
      padding: 50px 15px;
      @media (max-width: @global-breakpoint-phone-max) {
        padding: 20px 10px
      }

    }

    .right {
      padding: 50px 20px 50px 0;
      text-align: right
    }

  }

  .nav {
    border-top: 1px solid #333;
    border-bottom: 1px solid #333;
    > div {
      font-size: 16px;
      text-transform: uppercase;
      white-space: nowrap;
      overflow-x: auto;
      display: flex;
      justify-content: space-between;
      > a {

        display: inline-block;
        padding: 10px 10px;
      }

    }
  }
</style>
<script>
  if (process.client) {
    require('./iconfont')

  }
  export default {
    data() {
      return {
        // searchValue: '11'
      }
    },
    methods: {
      search(data) {
        this.$router.push(`/produces/search/${data}`)
      }
    }

  }
</script>
