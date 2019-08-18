<template>
  <div class="container">

    <img v-lazy="s1" alt="">
    <img v-lazy="s2" alt="">
  </div>

</template>

<script>
  export default {

    data() {

      return {

        s1: require('../assets/picture/s1.jpg'),
        s2: require('../assets/picture/s1.jpg')
      }
    }
  }
</script>
