
<template>
  <h1 class="">Secret page</h1>
</template>

<script>
  export default {  layout:'demo',
    async asyncData(){
      console.log('asyncData')
    },
    middleware: 'auth'
  }
</script>

