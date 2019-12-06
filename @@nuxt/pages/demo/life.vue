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
        console.log('$nextTick服务器+客户端执行')
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

    //后面的钩子只在浏览器运行-----------------------------------------------------
    beforeMount(){
      console.log('beforeMount')
      this.$nextTick(()=>{
        console.log('$nextTick浏览器端渲染完成')
      })
    },
    mounted() {
      console.log('mounted浏览器端运行')
    },
    beforeUpdate(){
      console.log('beforeUpdate')
    },
    updated() {
      console.log('update')
    }

  }
</script>
