<template>
  <div>
    head
  </div>
</template>
<script>
  let i = 1

  export default {
    data() {
      return {
        ...this.$store.state.global.global
      }
    },
    layout: 'demo',

    head() {
      //head晚于created 所以head里可以使用this.xxx数据
      console.log(this)
      return {
        title: this.title,
        meta: [
          {charset: 'utf-8'},
          {name: 'viewport', content: 'width=device-width, initial-scale=1'},
          {
            hid: 'description',
            name: 'description',
            content: this.description
          }
        ],
      }
    },
  }


</script>
