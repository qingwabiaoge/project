<template>
  <div>



  </div>

</template>

<style lang="less">

  @hover-underline-color: @global-color-primary;
  //从左边延长
  .hover-underline() {
  & {
    position: relative;
  }
  ;
  &::after {
    content: "";
    display: inline-block;
    width: 0;
    height: 2px;
    background: @hover-underline-color;
    transition: all 0.5s;
    position: absolute;
    bottom: 0px;
    left: 0;

  }
  &.active,
  &:hover,
  &:focus
  &:active
  {
  //color: @hover-underline-color;
    &::after {
      width: 100%;

    }
  }

  }

  //从中间延长
  .hover-underline-center() {

  &::after {
    width: 100%;
    transform: scale(0.5, 1);
  }
  &:hover,
  &:focus
  &:active {
    &::after {
      width: 100%;
      transform: scale(1, 1)
    }
  }
  }

  //位置放到了上方
  .hover-underline-top() {
  &::after {
    top: 0
  }
  }

  //用于竖形导航
  .hover-underline-left() {
    display: inline-block;
  &:hover::after,
  &.active::after {

    height: 100% !important;
    width: 2px !important;
    position: absolute;
    top: 0;
  }
  }




</style>
