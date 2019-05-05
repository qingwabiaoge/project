<template>
  <div>

    <div class="position-fixed background-black ">
      <router-link v-for="item in $router.options.routes.filter(item=>/^demo-/.test(item.name))" :key="item.path"
                   :to="{ path:item.path}"
                   class="inverse-wrap">
        {{item.name}}
      </router-link>
    </div>
    <div style="padding-top: 100px">

      <router-view/>
    </div>

  </div>

</template>

<style>


</style>
