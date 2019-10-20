<template>

  <contact :data="{...components.contact,background:'',bg:'#fff'}">

  </contact>
</template>

<script>
  import mixin from '@/mixins/page-mixin'
  export default {
    asyncData({store }){
      return{
        ...store.getters['components/components'].contact
      }
    },
    mixins:[mixin]
  }
</script>
