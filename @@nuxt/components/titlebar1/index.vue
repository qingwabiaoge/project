<template>
  <div :class="$style.titlebar">
    <aside>
      <img :src="data.icon"/>
    </aside>
    <section>
      <h3>{{data.subtitle}}</h3>
      <h2 contenteditable="true">{{data.title}}</h2>
    </section>
  </div>
</template>
<script>

import mixin from '@/mixins/conponent-mixin'


export default {
  mixins: [mixin],

}

</script>

<style lang="postcss" module>
  .titlebar {

    & {
      display: flex;
      align-items: center;
      padding: 15px;
    }


    aside {
      background: var(--primary-color);
      fill: white;
      color: white;
      padding: 10px;
      border-radius: 50%;

      img {
        height: 30px
      }
    }

    section {
      & {
        margin-left: 10px;
      }

      h3 {
        font-size: 10px;
      }

      h2 {
        margin-top: 0;
      }
    }

  }

</style>
