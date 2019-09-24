<template>

  <div>

    <!--<login></login>-->
    <div class="uk-background-default uk-padding  uk-box-shadow-small uk-box-shadow-hover-medium">
      <router-link to="/"><img :src="$store.state.global.image" :alt="components.brand.title" style="max-height: 50px">
      </router-link>


      <div class="uk-float-right " style="line-height: 40px">
        <div v-if="$store.state.global">
          <i class="iconfont icon-yonghu uk-h1"></i>

          <span class="uk-padding-left-xs">{{$store.state.global.title}} 登录成功</span>
          <a @click="$store.commit('token/remove');" class="uk-text-danger uk-padding-left">
            <i class="iconfont  icon-tuichu uk-h4 uk-text-danger"></i>
            退出登录
          </a>
        </div>
        <router-link v-else :to="{name:'login'}" class="uk-text-primary">
          登录:
        </router-link>
      </div>


    </div>

    <el-row
      class="uk-background-default uk-margin-top uk-padding-large uk-padding-left uk-padding-right uk-box-shadow-small uk-box-shadow-hover-medium">

      <el-col :span="3">

        <siderbar></siderbar>

      </el-col>
      <el-col :span="21" class="background-white">
        <div class="grid-content bg-purple-light uk-padding-left-lg">
          <router-view/>
        </div>
      </el-col>

    </el-row>
    <el-row class="uk-text-muted uk-text-center uk-padding">
      <span>{{$store.state.global.name}}</span>
    </el-row>
  </div>
</template>

<style scoped>

  /*.el-menu-vertical-demo:not(.el-menu--collapse) {*/
  /*width: 200px;*/
  /*min-height: 400px;*/
  /*}*/

</style>

<script>
  import siderbar from '@/components/sidebar'


  export default {
    components: {siderbar},

  }
</script>
