<template>
  <ul class="module">
    <li v-for="item in goods">
      <a :href="item.src">
        <img :src="item.img" alt="">
        <h3>{{item.name}}</h3>
      </a>
    </li>
  </ul>

</template>

<script>

  import goods from './good'
  export default {

    data() {
      return {
        goods
      }
    },
    created(){
      console.log(this.$store.ctx)
    }
  }
</script>
<style>
  .module{
    background: url("./images/bg.jpg") repeat;
  }

</style>

