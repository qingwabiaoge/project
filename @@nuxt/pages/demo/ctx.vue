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
      // this.$myCombinedInjectedFunction('this.$myCombinedInjectedFunction')
      // this.$store.$myCombinedInjectedFunction('this.$store.$myCombinedInjectedFunction')
      // this.$store.commit('injectedFunction','this.$store.commit')
    }
  }
</script>
