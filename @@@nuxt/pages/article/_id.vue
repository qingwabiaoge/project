<template>
  <div class="container">

    <articleDetail :data="article">


    </articleDetail>
  </div>


</template>

<script>
  export default {
    async asyncData({$axios, route}) {


      const {article} = await $axios.get(`/article/${ route.params.id}`)

      return {article}
    }


  }

</script>
