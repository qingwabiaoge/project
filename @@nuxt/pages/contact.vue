<template>

  <contact :data="{...components.contact,background:'',bg:'#fff'}">

  </contact>
</template>

<script>
  import mixin from '@/mixins/map-mixin'
  export default {
    mixins:[mixin]
  }
</script>
