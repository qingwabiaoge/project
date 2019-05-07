<template>
  <div></div>
</template>
<script>

  export default{
    created(){
      console.log(this.$route)
    },
    async asyncData ({ app , req , redirect , route }){

      redirect({ path: '/goodss/幻彩漆' })

    }
  }


</script>
