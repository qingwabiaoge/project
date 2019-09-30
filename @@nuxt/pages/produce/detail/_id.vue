<template>
  <div class="container" style="padding: 30px 20px; background: #fff">

    <produce-page1 :data="produce">

    </produce-page1>
  </div>
</template>

<script>
  export default {

    async asyncData({route, $axios}) {

      const {produce} = await $axios.get(`/produce/${route.params.id}`)
      console.log(produce)
      return {produce}

    }

  }

</script>
