<template>
  <div>
    <div :class="$style['title-throughLine']"><a><slot></slot></a></div>
  </div>

</template>

<script>
  import mixin from '@/plugins/conponent-mixin'
export default {
    mixins:[mixin],}
</script>

<style lang="less" module="">
  @title-square-color:@global-background-emphasis;
  /*穿越线*/

  @title-throughLine-line-width: 25%; //左右两个线的长度
  @title-throughLine-line-position: 10%; //左右两根线离边缘的距离
  @title-throughLine-color: @global-background-emphasis; //左右线默认的颜色
  @title-throughLine-fontsize: 22px;


  .title-throughLine {
    text-align: center;
    position: relative;
    a {
      color: @title-throughLine-color;
      display: inline-block;
    }
    &::before, &::after {
      content: "";
      display: block;
      width: @title-throughLine-line-width;
      height: 2px;
      position: absolute;
      left: @title-throughLine-line-position;
      top: @title-throughLine-fontsize/2;
      background: @title-square-color;
    }
    &::after {
      left: auto;
      right: @title-throughLine-line-position;

    }
    &:hover::before, &:hover::after {
      width: @title-throughLine-line-width*1.2;
      transition: all 0.5s;
    }
    img {
      height: @title-throughLine-fontsize;
    }
  }

</style>
