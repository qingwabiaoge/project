<template>


    <div class="text-center">
      <a v-for="(item,index) in navs"
          @click="$emit('input', item.value)"
          class="hover-underline"
          :class="item.value===value? 'active':''"
         style=" display: inline-block;padding: 10px 20px;">
        {{item.label}}
      </a>
    </div>

  
</template>

<script>
  export default {

    props: ['navs', 'value'],

  }
</script>

