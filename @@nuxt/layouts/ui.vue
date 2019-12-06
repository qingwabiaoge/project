<template>
  <theme-provider :theme="{
    primary
  }">

    <div style="background: white">
      <router-link v-for="item in $router.options.routes.filter(item=>/^ui-/.test(item.name))" :key="item.path"
                   :to="{ path:item.path}"
                   class="color-inverse">
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
