<template>
  <section>
    {{asyncData}}


  </section>
</template>
<script>

  export default {  layout:'demo',
    async asyncData({app}) {

       return {asyncData:'asyncData'}
    },

    async beforeCreate() {
      //不能服务器渲染
      console.log('beforeCreate服务器端+浏览器端运行')
    },
    async created() {

      //不能服务器渲染
      console.log('created服务器端+浏览器端运行')
      this.$nextTick(()=>{console.log('渲染完成')})
    },
    async mounted() {
      console.log('mounted浏览器端运行')


    }

  }
</script>
