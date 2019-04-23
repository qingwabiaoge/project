<template>
  <div>
    {{msg| tocase(1)}}

  </div>

</template>


<script>
  export default {
    data() {
      return {msg: 'msg'}
    }
  }
</script>
