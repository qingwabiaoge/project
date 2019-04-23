<template>
  <div></div>
</template>
<script>

  export default {
    mounted(){
      //mani.js 对store对象注入了$fn
     this.$store.$fn()

    }
  }
</script>
