<template>
  <section>

    {{asyncData}}

    {{computedData}}
    {{data}}
  </section>
</template>
<script>

  export default {
    layout: 'demo',
    meddleware:['test-life'],
    validate(){
      console.log('validate执行')
      return true
    },
    async asyncData({app}) {
      console.log('asyncData函数运行')
      return {asyncData: 'asyncData'}
    },
     fetch(){
      console.log(`fetch执行`)
    },
    data(){
      console.log('data执行')
      return{data:'data()-data'}
    },
    beforeCreate() {
      //不能服务器渲染
      console.log('beforeCreate服务器端+浏览器端运行')
    },
    watch: {
      asyncData: {
        immediate: true,
        handler() {
          console.log('watch运行')
        }
      }
    },
    created() {

      //不能服务器渲染
      console.log('created服务器端+浏览器端运行', this.asyncData)
      this.$nextTick(() => {
        console.log('$nextTick渲染完成')
      })
    },
    computed: {
      computedData() {
        console.log('computed执行')
        return this.asyncData + 100
      }
    },
    head(){
      console.log('head执行')
    },
    beforeMount(){
      console.log('beforeMount')

    },

    //$nextTick渲染完成在这里运行

    mounted() {
      console.log('mounted浏览器端运行')

    }

  }
</script>
