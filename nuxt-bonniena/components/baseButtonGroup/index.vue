<template>
  <div :class="$style.baseButtonGroup">
    <slot></slot>
  </div>
</template>

<style lang="less" module>
  .baseButtonGroup {
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
