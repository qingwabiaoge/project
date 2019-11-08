<template>
  <div >
    <div style="background: #eee">
      <div v-if="$nuxt.isOffline">You are offline</div>
      <div v-else>online</div>
    </div>

    <div class="position-fixed background-black inverse-color">
      <router-link v-for="item in $router.options.routes.filter(item=>/^demo-/.test(item.name))" :key="item.path"
                   :to="{ path:item.path}"
                   >
        {{item.name}}
      </router-link>
    </div>
    <div style="padding-top: 100px">

      <router-view/>
    </div>

  </div>

</template>
<script>
  import mixin from '@/mixins/page-mixin'
  export default {
    mixins:[mixin]
  }
</script>
<style>


</style>
