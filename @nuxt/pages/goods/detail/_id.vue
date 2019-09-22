<template>
  <div class="container" style="padding: 30px 20px; background: #fff">
    <navHorizontal style="margin-top: 30px; margin-bottom: 30px">

    </navHorizontal>
    <goodsA :data="goods">


    </goodsA>
  </div>
</template>

<script>
  export default {

    async asyncData({route, $axios}) {

      const {goods} = await $axios.get(`/getGoodsById/${route.params.id}`)
      return {goods}

    }

  }

</script>
