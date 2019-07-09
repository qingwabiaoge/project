<template>


    <div :class="$style.list">
      <a v-for="(item,index) in navs"
          @click="$emit('input', item.value)"
          :class="[item.value===value? 'active':'','hover-underline'] ">
        {{item.label}}
      </a>
    </div>



</template>

<script>
  export default {

    props: ['navs', 'value'],

  }
</script>

<style lang="less" module>
  .list {
    text-align: center;
    a {
      display: inline-block;
      padding: 10px 20px;

    }

  }
</style>
