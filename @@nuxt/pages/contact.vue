<template>

  <contact :data="{...components.contact,background:'',bg:'#fff'}">

  </contact>
</template>

<script>
  import mixin from '@/mixins/page-mixin'
  export default {
    asyncData({store }){
      return{
        //注入数据到当前组件,类似于prop的作用,为了head使用
        ...store.getters['components/components'].contact
      }
    },
    mixins:[mixin]
  }
</script>
