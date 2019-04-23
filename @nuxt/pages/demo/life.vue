<template>
  <section>
    {{data}}

    <demolife></demolife>
  </section>
</template>
<script>

  export default {
    async asyncData({app}) {
      console.log('async asyncData')
       return {data:''}
    },

    async beforeCreate() {
      //不能服务器渲染
      console.log('beforeCreate服务器端+浏览器端运行'+this.$store.state.counter)
    },
    async created() {
      console.log(this.$store.dispatch)
      //不能服务器渲染
      console.log('created服务器端+浏览器端运行'+this.$store.state.counter)
      this.$nextTick(()=>{console.log('渲染完成')})
    },
    async mounted() {
      console.log('mounted浏览器端运行'+this.$store.state.counter)


    }

  }
</script>
