<template>
  <div>
    <el-breadcrumb separator=">" style="margin-bottom: 20px">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>网站配置1</el-breadcrumb-item>
    </el-breadcrumb>

    <el-button type="primary" @click="get">编辑全局信息</el-button>
    <uniform ref="uniform" :data="uniformData" @submit='submit'></uniform>

  </div>

</template>
<script>

  import mixin from '@/mixins/admin-page-mixin'
  export default {
    layout:'admin',
    data() {
      return {
        uniformData: {},
      };
    },

    methods: {
      async submit() {
        this.$store.dispatch('global/patch', this.uniformData)
        this.$refs.uniform.visible = false
      },

      get: function () {
        this.uniformData = Object.assign({}, this.$store.state.global.global)
        this.$refs.uniform.visible = true
      },

    }
    ,
    mounted() {
      this.get()
    },
    mixins:[mixin]
  }


</script>
<style lang="less" scoped>


</style>
