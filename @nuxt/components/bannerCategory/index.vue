<template>
  <div>

    <img v-if="image" v-lazy="image" alt="">
  </div>
</template>

<script>
  export default {

    computed: {

      image() {
        const categorys = this.$store.state.components
        const _categorys = categorys.filter(item => item.title === this.$route.path.split('/')[1])
        return _categorys[0] ? _categorys[0].image : false
      }
    }
  }

</script>
