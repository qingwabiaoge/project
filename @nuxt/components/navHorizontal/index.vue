<template>
  <div :class="$style['nav']">
    <nuxt-link v-for="item in this.$store.getters.categorys[0].ul" :to="`/produces/${item.title}?page=1`||'#'" :key="item.title">
      {{item.title}}
    </nuxt-link>

  </div>
</template>


<style module lang="less">
  .nav {
    text-align: center;
    text-transform: uppercase;
    display: flex;
    a {
      border: 1px #eee solid;
      border-right: 0;
      padding: 8px 43px;
      flex: 1 1;
      &:last-child {
        border-right: 1px solid #eee;
      }
    }
  }

</style>
