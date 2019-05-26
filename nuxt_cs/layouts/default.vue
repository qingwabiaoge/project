<template>

  <div>
    <theme-provider :theme="defaultTheme">
      <div class="uk-position-fixed uk-background-black ">
        <nuxt-link v-for="item in $router.options.routes"
                     :to="{ path:item.path}"
                     class="color-white">
          {{item.name}}
        </nuxt-link>
      </div>

      <div style="padding-top: 100px">

        <router-view/>
      </div>
    </theme-provider>
  </div>

</template>
<script>
  import defaultTheme from '@/styled/theme'
  import {ThemeProvider} from 'vue-styled-components'
  export default {
    data() {
      return {defaultTheme}
    },
    mounted() {
      console.log('layout')
    },
    components: {

      'theme-provider': ThemeProvider
    },
  }
</script>
<style>


</style>
