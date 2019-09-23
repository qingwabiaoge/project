<template>
  <div>
  <no-ssr>
   nossr: {{goods}}
  </no-ssr>

    <h1>
     ssr: {{goods}}
    </h1>
  </div>
</template>
<script>
  export default {  layout:'demo',
    async asyncData({app}) {
      const {goods} = await app.$axios.get('/test')
      return {goods}
    },

  }
</script>
