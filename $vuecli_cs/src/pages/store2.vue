<template>
  <div>
    {{$store.state.counter}}
  </div>
</template>
<script>

  export default {
    mounted() {
      this.$store.commit('add', 1)

    }
  }
</script>
