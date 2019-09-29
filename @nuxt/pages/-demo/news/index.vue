<template>
  <div>
    <h2>News Index page</h2>
    <p>NewsID:{{$route.params.articleId}}</p>
    <ul>

      <nuxt-link :to="{name:'demo-article-id',params:{id:123,title:'标题News-1'}}">News-1</nuxt-link>
    </ul>
  </div>
</template>

<script>
  export default {
    layout: 'demo',
    name: "cs",

  }
</script>

<style scoped>

</style>
