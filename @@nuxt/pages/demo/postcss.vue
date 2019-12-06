<template>
  <div>
  <div :class="$style.wrap" >
    <h1 href="#">h1</h1>
    <section>section</section>
    <style>
      :root {
      //记得末尾带;
        --hero-image: url('{{ heroImage }}');
      }
    </style>
  </div>
  </div>
</template>

<script>
  import img from '@/assets/images/test/image2.jpg'
  import mixin from '@/mixins/conponent-mixin'

  export default {
    layout: 'demo',
    data() {
      return {heroImage: img}
    },
    mixins: [mixin]
  }

</script>

<style lang="postcss" module>


  @define-mixin bgBlue{
    background:var(--primary-color);
  }

  .wrap {

    h1 {

      background-image: var(--hero-image);
      /*使用color函数,这里要nuxt.config.js-postcss-color-mod-function设置的颜色才行*/
      color: color-mod(var(--nuxt-config-color) a(20%));
      transform: rotate(2deg);
    }
    section{
      @mixin bgBlue
    }
  }

</style>
