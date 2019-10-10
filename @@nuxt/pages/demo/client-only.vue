<template>
  <div>
    <client-only>
      nossr: {{produce}}

    </client-only>

    <h1>
      ssr: {{produce}}
    </h1>
    <client-only>
      <button @click="clickbtn">clickbtn</button>
      <el-button @click="clickbtn"></el-button>
    </client-only>
  </div>
</template>
<script>
  export default {
    layout: 'demo',
    async asyncData({app}) {
      const {produce} = await app.$axios.get('/test')
      return {produce}
    },
    methods:{
      clickbtn(){
        console.log(this)
      }
    }

  }
</script>
