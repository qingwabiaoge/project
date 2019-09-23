<template>
  <div >

    <picC :data='$store.state.test[0]' placement="left" :height="300">

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
    layout: 'ui',

  }

</script>

