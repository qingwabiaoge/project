<template>
  <div :class="[$style['card'],type?$style[type]:'']">
    <section :class="border?$style['border']:''">
      <slot></slot>
    </section>
  </div>

</template>

<script>

export default {

    props: {
      type: String,
      border: String
    }

  }

</script>

<style module lang="less">
  .card {
    background: #fff;
    padding: 15px;
    &.inverse {
      background: #222;
      .inverse-wrap
    }
    section {
      padding: 15px;
      &.border {
        border: 1px solid #999;
      }
    }

  }

</style>
