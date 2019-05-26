<template>
  <div>
    <button @click="fn">
      {{$store.state.counter}}
    </button>
  </div>

</template>

<script>
  export default {
    fetch({store}) {
      store.commit('SET_SOME', 10)
    },
    methods: {
      fn() {
        this.$store.commit('SET_SOME', 2)
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
