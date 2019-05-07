<template>
  <span :class="$style.popover"
        @mouseover="show=true"
        @mouseout="show=false"
  >
  <slot>popover</slot>
     <transition name="fade">
    <div v-if="show">
      <slot name="popover">
        popover
      </slot>

    </div>
     </transition>
  </span>
</template>
<script>
    export default {
        data() {
            return {
                show: false
            }
        }
    }

</script>
<style module>
    .popover {
        position: relative;

    }

    .popover div {
        position: absolute;
        /*   本层的偏移量*/
        transform: translate(-50%, -100%);
        /*相对relative层的位置*/
        left: 50%;
        top: -10px;
    }
</style>
