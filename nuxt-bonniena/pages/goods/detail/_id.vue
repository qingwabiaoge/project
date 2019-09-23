<template>
  <div class="container" style="padding: 30px 20px; background: #fff">

    <goodsA :data="goods">


    </goodsA>
  </div>
</template>

<script>
  export default {

    async asyncData({route, $axios}) {

      const {goods} = await $axios.get(`/goods/${route.params.id}`)
      return {goods}

    }

  }

</script>
