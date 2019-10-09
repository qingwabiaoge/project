<template>


  <div class="header">

    <div class="top">

      <div class="container">
        <el-row>
          <el-col :md="12" class="left">

            Welcome To {{data.title}}
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

    <div class="banner container">
      <el-row>
        <el-col :md="12" class="left">
          <img :src="data.image" :alt="data.title">
        </el-col>

        <el-col :md="{span:6,offset:6}"  class="right">

          <el-input
            placeholder="search"
            prefix-icon="el-icon-search"
            v-model.lazy="inputValue">
          </el-input>
        </el-col>

      </el-row>

    </div>


    <nav class="nav">
      <div class="container">
        <nuxt-link to="/" :style="{color:$route.name==='index'?'#FB00C9':'#333'}">{{ 'home' | translate }}</nuxt-link>
        <nuxt-link v-for="item in data.children" :to="'/'+item.name||'#'" class="hover-underline" :key="item.title">
          {{item.title}}
        </nuxt-link>
      </div>
    </nav>


  </div>

</template>
<script>
  import mixin from '@/mixins/conponent-mixin'

  if (process.client) {
    require('./iconfont')

  }
  export default {
    mixins: [mixin],
    data() {
      return {
        inputValue: ''
        // searchValue: '11'
      }
    },
    methods:{
      goBottom() {
        window.scrollTo(0, document.body.offsetHeight);
      }
    },
    watch: {
      inputValue(value) {
        this.$router.push(`/produce/?title=${value}`)
      }
    }

  }
</script>

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
      padding: 30px 15px;
      @media (max-width: @global-breakpoint-phone-max) {
        padding: 20px 10px
      }

    }

    .right {
      padding: 30px 20px 30px 0;
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
