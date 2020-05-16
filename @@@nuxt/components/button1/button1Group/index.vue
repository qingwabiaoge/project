<template>
  <div :class="$style.button1Group">
    <slot></slot>
  </div>
</template>
<script>
  import mixin from '@/mixins/conponent-mixin'
  export default {}
</script>
<style lang="less" module>
  .button1Group {
    /*消除inline-block的间距*/
    font-size: 0;

    button {
      margin-top: 0;
      border-right: 0;
      &:last-child {
        border-width: 1px;
      }
    }
  }

</style>
