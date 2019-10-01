<template>

  <div :class="$style['admin']">

    <!--<login></login>-->
    <header>
      <el-row>
        <el-col :span="12">
          <router-link to="/"><img :src="$store.state.global.global.image" :alt="components.brand.title"
                                   style="max-height: 50px">
          </router-link>
        </el-col>
        <el-col :span="12" style="text-align: right">
          <div class=" " style="line-height: 40px">
            <div v-if="$store.state.global">
              <i class="iconfont icon-yonghu uk-h1"></i>

              <span class="uk-padding-left-xs">{{$store.state.global.global.title}} 登录成功</span>
              <a @click="$store.commit('token/remove');" class="uk-text-danger uk-padding-left">
                <i class="iconfont  icon-tuichu uk-h4 uk-text-danger"></i>
                退出登录
              </a>
            </div>
            <router-link v-else :to="{name:'login'}" class="uk-text-primary">
              登录:
            </router-link>
          </div>
        </el-col>
      </el-row>

    </header>

    <el-row :gutter="20">

      <el-col :span="4">
        <aside>
          <el-menu

            class="el-menu-vertical-demo "
            default-active="$route.path"
            router>
            <el-menu-item index="/admin/produces">
              <i class="el-icon-goods"></i>
              <span slot="title">产品</span>
            </el-menu-item>
            <el-menu-item index="/admin/articles">
              <i class="el-icon-tickets"></i>
              <span slot="title">新闻</span>
            </el-menu-item>

            <el-menu-item index="/admin/component">

              <i class="el-icon-picture"></i>
              <span slot="title">组件&栏目</span>

            </el-menu-item>


            <el-menu-item index="/admin/message">
              <i class="el-icon-phone"></i>
              <span slot="title">  留言</span>
            </el-menu-item>

            <el-menu-item index="/admin/global">
              <i class="el-icon-setting"></i>
              <span slot="title">全局配置</span>
            </el-menu-item>
          </el-menu>
        </aside>
      </el-col>

      <el-col :span="20">

        <article class="grid-content bg-purple-light uk-padding-left-lg">
          <nuxt/>
        </article>
      </el-col>


    </el-row>


    <el-row class="uk-text-muted uk-text-center uk-padding">
      <span>{{$store.state.global.name}}</span>
    </el-row>
  </div>
</template>

<style module lang="less">
  .admin {
    header {
      background: white;
      margin-bottom: 20px;
      padding: 20px;
      border-bottom: 1px solid #f1f1f1;
    }
    article{
      background: white;
      padding: 20px;
    }

  }

</style>

<script>
import mixin from '@/plugins/page-mixin'

  export default {
    data() {
      return {isCollapse: true}
    },
    //components: {siderbar},
    created() {
      //进入admin验证token是否过期
      //this.$axios('/validateToken')
    },
    mixins:[mixin]
  }
</script>
