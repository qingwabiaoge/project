<template>
  <div>

    <div style="background: #000">
      <router-link v-for="item in $router.options.routes.filter(item=>/^ui-/.test(item.name))" :key="item.path"
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
