<template>
  <div>msg</div>
</template>

<script>

  export default {

    layout:'demo',

    async asyncData(ctx) {
      console.log(ctx) //false
    },

    mounted(){
      console.log('this',this)
    }
  }
</script>
