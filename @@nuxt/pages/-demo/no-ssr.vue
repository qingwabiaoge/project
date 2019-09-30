<template>
  <div>
  <no-ssr>
   nossr: {{produce}}
  </no-ssr>

    <h1>
     ssr: {{produce}}
    </h1>
  </div>
</template>
<script>
  export default {  layout:'demo',
    async asyncData({app}) {
      const {produce} = await app.$axios.get('/test')
      return {produce}
    },

  }
</script>
