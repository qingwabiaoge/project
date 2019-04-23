<template>
  <div class="container">

    <articleA :data="article">


    </articleA>
  </div>


</template>

<script>
  export default {
    async asyncData({$axios, route}) {


      const {article} = await $axios.get(`/getArticleById/${ route.params.id}`)

      return {article}
    }


  }

</script>
