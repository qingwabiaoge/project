<template>
  <theme-provider :theme="{
    primary
  }">

    <div style="background: #eee;">
      <span v-if="$nuxt.isOffline">You are offline</span>
      <span v-else>online</span>
      <button class="red" @click="setPrimary('red')">red</button>
    </div>

    <div  style="background: white " class="color-inverse">
      <router-link v-for="item in $router.options.routes.filter(item=>/^demo-/.test(item.name))" :key="item.path"
                   :to="{ path:item.path}"
      >
        {{item.name}}
      </router-link>
    </div>
    <div style="padding-top: 100px">

      <router-view/>
    </div>

  </theme-provider>
</template>
<script>
import mixin from '@/mixins/page-mixin'
import { ThemeProvider } from 'vue-styled-components'

export default {
  mixins: [mixin],
  components: {
    'theme-provider': ThemeProvider
  },
}
</script>
<style>


</style>
