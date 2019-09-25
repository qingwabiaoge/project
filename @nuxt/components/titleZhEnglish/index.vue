<template>


  <div :class="$style.title">
    <section class="hover-underline hover-underline-center">

      <h2 v-if="data.title">{{data.title}}</h2>
      <h3 v-if="data.subtitle"> {{data.subtitle}}</h3>

    </section>
  </div>

</template>


<style module lang="less">

  .title {

    display: flex;
    justify-content: center;
    padding-top: 90px;
    margin-bottom: 50px;

    section {
      display: flex;
      padding-bottom: 20px;

      h2 {
        font-size: 60px;
        line-height: 0.8;
        text-transform: uppercase;
      }

      h3 {
        flex: 0 0;
        display: inline-block;
        background: darken(@global-color-primary, 20%);
        color: white;
        padding: 5px;
        margin-left: 15px;
        margin-top: 0;
        writing-mode: vertical-lr; /*从左向右 从右向左是 writing-mode: vertical-rl;*/
      }
    }
  }
</style>

