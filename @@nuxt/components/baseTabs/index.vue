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
  import mixin from '@/mixins/conponent-mixin'
export default {
    mixins:[mixin],

    props: ['navs', 'value'],

  }
</script>

