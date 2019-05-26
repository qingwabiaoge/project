<template>
  <div>

  </div>
</template>

<script>
  function fn() {

    return new Promise((resove, reject) => {

      setTimeout(() => resove(1), 2000)
    })
  }


  export default {

    async asyncData() {
      const i = await fn()
      console.log(i)
    },
    middleware: 'auth',

    beforeCreate(){
      console.log('vue    beforeCreated')
    }
  }
</script>

