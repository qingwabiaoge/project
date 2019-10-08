<template>

  <transition name="slider-left">
    <div v-if="value"
         class="background-default"
         style="position:fixed;left: 0; top: 0; width: 300px; height: 100%; z-index: 10">
      <slot></slot>
    </div>
  </transition>

</template>
<script>
  import mixin from '@/mixins/conponent-mixin'
export default {
    mixins:[mixin],
    props: {
      value: {
        type: Boolean,
        default: false
      }
    }

  }

</script>


