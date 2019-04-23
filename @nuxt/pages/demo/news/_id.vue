<template>
  <div>
    <h2>文章页 [{{$route.params.id}}]</h2>

  </div>
</template>

<script>
  export default {

    fetch({store, params}) {
      console.log(store)
      console.log(params)

    },
    validate({params}) {
      // Must be a number
      return /^\d+$/.test(params.id)
    },
    data() {
      return {
        title: this.$route.params.title,
      }
    },
    head() {
      return {
        title: this.title,
        meta: [
          {hid: 'description', name: 'news', content: 'This is news page'}
        ]
      }
    }
  }
</script>

<style scoped>

</style>
