<template>
  <section>
    {{goods}}
    {{msg}}
  </section>
</template>
<script>
  // import api from '../api'

  export default {
    async asyncData({$axios,store}) {
      const res = await $axios.get('/qin')
      const res2 = await $axios.get('/qin')
      store.dispatch('axios')
      return {goods: res.goods, msg: res2.goods}
    },

    /* async beforeCreate() {
       //不能服务器渲染
       const {msg} = await api.get('/qin')
       this.data = msg

     },
     async created() {
       //不能服务器渲染
       const {msg} = await api.get('/qin')
       this.data = msg

     },*/

    async mounted() {
      //此this.axios因为plugin里设置
      //这里未服务器渲染,属于vue代码下载到本地然后向服务器api申请数据
      const {goods} = await this.$axios.get('/qin')
      this.goods = goods + 1111111111111


    }


  }
</script>
