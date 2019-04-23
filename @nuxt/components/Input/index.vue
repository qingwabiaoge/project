<template>
  <input :class="$style['input']" type="text" :value="value" @input="$emit('input',$event.target.value)">
</template>

<script>

  export default {
    data() {
      return {
        value: {}
      }
    },
    props: {
      value: String
    }

  }

</script>

<style module lang="less">
  .input {
    border: 1px solid #777;
    height: 50px;
    padding: 0 20px;
    background: transparent;
    &:focus {
      border: 1px solid @global-color-primary;
      box-shadow: 0px 2px 2px rgba(200, 200, 200, 0.5)
    }

  }

</style>
