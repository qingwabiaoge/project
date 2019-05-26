<template>
    <div>
      {{$store.state.counter}}

    </div>

</template>

<script>
  export default {
    fetch ({ store, params }) {

          store.commit('SET_SOME', 1000)

    }
  }
</script>

<style lang="less" scoped>

</style>
