<template>
  <section>
index
    <styled></styled>
  </section>
</template>
<script>
  export default {

    async beforeCreate() {
      //不能服务器渲染
      console.log('page beforeCreate服务器端+浏览器端运行'+this.$store.state.counter)
    },
    async created() {
      console.log(this.$store.dispatch)
      //不能服务器渲染
      console.log('page created服务器端+浏览器端运行'+this.$store.state.counter)
     this.$nextTick(()=>{console.log('渲染完成')})
    },
    async mounted() {
      console.log('apge mounted浏览器端运行'+this.$store.state.counter)


    }
  }

</script>
