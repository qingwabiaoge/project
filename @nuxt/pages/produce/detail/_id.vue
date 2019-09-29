<template>
  <div class="container" style="padding: 30px 20px; background: #fff">

    <produceA :data="produce">


    </produceA>
  </div>
</template>

<script>
  export default {

    async asyncData({route, $axios}) {

      const {produce} = await $axios.get(`/produce/${route.params.id}`)
      return {produce}

    }

  }

</script>
