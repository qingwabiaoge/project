<template>
  <div class="text-center padding-top-larger padding-bottom-larger container "
       style="background: none"
  >
    <nuxt-link :to="data.href?data.href:'#'" :class="$style.link">
      <h2>{{data.title}}{{data.subtitle}}</h2>
      <p class="text-uppercase text-light">
        {{data.info}}
      </p>
    </nuxt-link>

    <p v-if="data.description" class="margin-top-small">{{data.description}}</p>

  </div>
</template>

<script>
  import mixin from '@/mixins/conponent-mixin'
export default {
  mixins:[mixin]
  }
</script>

<style lang="less" module>
  .link {
    display: inline-block;

    h2, p {
      transition: all @global-translation;
    }
  }

  .link:hover h2,
  .link:hover p,
  .link:hover b {
    transform: translate(0, 5px);
    color: @global-color-primary;
  }

  .link:hover p {
    transform: translate(0, -5px);
  }

</style>
