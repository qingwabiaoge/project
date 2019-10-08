<template>
  <div class="pictextCompany">


    <div>
      <img v-lazy="data.image" :alt="data.title">
    </div>
    <card type="inverse" border="true" style="margin-top: 6px">
      <h2 class="text-center" style="text-transform: uppercase">
        {{data.title}}
      </h2>
      <p>
        {{data.description|setLength(num)}}
        <span v-if="more" @click="num=10000;more=false">...</span>
      </p>
      <p class="text-center color-primary">
        <em v-if="more" @click="num=10000;more=false"> ▼</em> <em v-else @click="num=500;more=true"> ▲</em>
      </p>

    </card>
  </div>
</template>

<script>
  import mixin from '@/mixins/conponent-mixin'

export default {
    mixins:[mixin],

    data() {
      return {
        num: 500,
        more: true,
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
