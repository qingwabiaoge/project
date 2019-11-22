<template>
  <div :class="$style.wrap" :style="{'--primary-color':primary}">
    <h1 href="#">h1</h1>
    <section>section</section>
    <style>
      :root {
      //记得末尾带;
        --hero-image: url('{{ heroImage }}');
      }
    </style>
  </div>

</template>

<script>
  import img from '@/assets/images/test/image2.jpg'
  import mixin from '@/mixins/page-mixin'

  export default {
    layout: 'demo',
    data() {
      return {heroImage: img}
    },
    mixins: [mixin]
  }

</script>

<style lang="postcss" module>
  $primary-color:var(--primary-color);

  @define-mixin bgBlue{
    background:$primary-color;
  }

  .wrap {

    h1 {

      background-image: var(--hero-image);
      /*这里要nuxt.config.js设置的颜色才行*/
      color: color-mod(var(--color-blue) a(80%));
      transform: rotate(2deg);
    }
    section{
      @mixin bgBlue
    }
  }

</style>
