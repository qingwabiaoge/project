<template>
  <div>
    head
  </div>
</template>
<script>
  let i = 1

  export default {
    asyncData(ctx) {

      return {
        ...ctx.store.state.global.global
      }
    },
    layout: 'demo',

    head() {
      //这里之所以能用this为服务器端的vue组件,app是根组件
    //head晚于asyncData 所以head里可以使用this.xxx数据
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
