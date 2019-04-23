<template>
  <div class="container">

    <picC :data='$store.state.test[0]' placement="left">

    </picC>


    <picC :data='$store.state.test[0]' placement="right">

    </picC>
    <picC :data='$store.state.test[0]' placement="bottom">

    </picC>

    <picC :data='$store.state.test[0]' placement="cover">

    </picC>


  </div>
</template>

<script>
  export default {



  }

</script>
<style module lang="less">
  .pictextFour {
    display: flex;
    justify-content: space-between;

    @media (max-width: 640px) {
      & > * {
        width: 100%
      }

      flex-wrap: wrap;
      margin: 0;
    }
  }

</style>
