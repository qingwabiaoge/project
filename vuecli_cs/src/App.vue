<template>
  <div id="app">

    <div class="link ">
      <router-link v-for="item in $router.options.routes"
                   :to="{ path:item.path}"
                   :key="item.path"
                   class="color-white">
        {{item.name}}
      </router-link>
    </div>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>


  export default {
    name: 'App',

  }
</script>

<style scoped>
  .link {
    padding: 20px;
    background: #efefef;
    margin-bottom: 20px;
  }

  .link a {
    margin: 10px;
  }
</style>
