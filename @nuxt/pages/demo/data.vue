<template>
  <button @click="msg++">
    {{msg}}
  </button>
</template>
<script>
  export default {  layout:'demo',
    asyncData() {
      return {msg: 0}
    },
    data() {
      return {msg: 1}
    },
    watchQuery: ['id']
  }

</script>
