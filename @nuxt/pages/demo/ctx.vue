<template>
  <div></div>
</template>

<script>
  import Vue from 'vue'
  export default {

    async asyncData(ctx) {

      console.log(ctx) //false


      // fn()
      // app.$myCombinedInjectedFunction('asyncData')
      // app.myInjectedFunction('asyncData')
      // store.commit('injectedFunction','ctx.store')
    },

    mounted(){
      console.log(this)
      // this.$myCombinedInjectedFunction('this.$myCombinedInjectedFunction')
      // this.$store.$myCombinedInjectedFunction('this.$store.$myCombinedInjectedFunction')
      // this.$store.commit('injectedFunction','this.$store.commit')
    }
  }
</script>
