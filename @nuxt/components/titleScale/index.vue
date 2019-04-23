<template>
  <div class="text-center padding-top-larger padding-bottom-larger container "
  style="background: none"
  >
    <nuxt-link v-if="href" :to="{path:href}" :class="$style.link">
      <h2><b>{{title}}</b>{{subTitle}}</h2>
      <p class="text-uppercase text-light">
        {{text}}
      </p>
    </nuxt-link>
    <div v-else :class="$style.link">
      <h2><b>{{title}}</b>{{subTitle}}</h2>
      <p class="text-uppercase text-light">
        {{text}}
      </p>
    </div>


    <p v-if="description" class="margin-top-small">{{description}}</p>

  </div>
</template>

<script>
  export default {
    props: {
      href: String,
      title: String,
      subTitle: String,
      text: String,
      description: String
    }

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
  .link:hover b
  {
    transform: translate(0, 5px);
    color: @global-color-primary;
  }

  .link:hover p {
    transform: translate(0, -5px);
  }

</style>
