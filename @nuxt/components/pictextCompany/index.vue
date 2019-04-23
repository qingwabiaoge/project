<template>
  <div class="pictextCompany">
    <div>
      <img v-lazy="$store.state.components.brand.image" :alt="$store.state.components.brand.tilte">
    </div>
    <card type="inverse" border="true" style="margin-top: 6px">
      <h2 class="text-center">
       {{$store.state.components.brand.etitle}}
      </h2>
      <p>
        {{$store.state.components.brand.description|setLongth(num)}}
        <span v-if="more" @click="num=10000;more=false">...</span>
      </p>
      <p class="text-center color-primary">
        <em v-if="more" @click="num=10000;more=false"> ▼</em> <em v-else @click="num=500;more=true"> ▲</em>
      </p>

    </card>
  </div>
</template>

<script>

  export default {

    data() {
      return {
        num: 500,
        more: true,
      }
    },
    filters: {

      setLongth(value, n) {
        return value.substring(0, n)
      }
    },

  }
</script>

<style module>
  .text {
    background: rgba(0, 0, 0, 0.6);
    margin: 15px;
    padding: 20px 10px;
  }


</style>
