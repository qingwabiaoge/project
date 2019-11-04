<template>
  <div>
    {{env}}
  </div>
</template>
<script>
  export default {
   layout:'demo',
    asyncData(){
      return{env:process.env.NODE_ENV}
    },
    created(){
      console.log(process.env.NODE_ENV)
    }
  }
</script>
