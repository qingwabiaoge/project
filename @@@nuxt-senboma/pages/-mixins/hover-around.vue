<template>

  <div :class="$style['hover-around']">


    <h1 class="text-center">hover-around</h1>

    <div :class="[$style['hover-around'],$style['hover-around-draw']]">
      11111111111111 <br>
      11111111111111
    </div>
    <br>
    <br>

    <div :class="[$style['hover-around'],$style['hover-around-draw']]">
      <img :src="mixinImg" width="200" alt="">

    </div>

    <div :class="[$style['hover-around'],$style['hover-around-draw'],$style['hover-around-draw-meet']]">
      <img :src="mixinImg" width="200"
           height="300" alt="">

    </div>
    <div :class="[$style['hover-around'],$style['hover-around-draw'],$style['hover-around-draw-center']]">
      <img :src="mixinImg" width="200" alt=""
           style="width: 150px; height: 200px">

    </div>

    <div :class="[$style['hover-around'],$style['hover-around-spin']]">
      <img :src="mixinImg" style=" height: 100%; width: 100%;  object-fit: cover" alt="" >

    </div>

    <div :class="[$style['hover-around'],$style['hover-around-spin'],$style['hover-around-spin-circle']]">
      <img class="hover-around-spin-circle "
           style=" height: 100%; width: 100%; border-radius:50%;  object-fit: cover"
           :src="mixinImg"  alt="">

    </div>

    <div :class="[$style['hover-around'],$style['hover-around-spin'],$style['hover-around-spin-thick']]">
      <img :src="mixinImg" style=" height: 100%; width: 100%;   object-fit: cover"alt="">

    </div>

    <h3>用鼠标滑过下面的按钮看看效果！</h3>
    <button class="button button-default  hover-around hover-around-draw hover-around-draw-meet">hover-around-draw
      hover-around-draw-meet
    </button>

    <button class="button button-default hover-around hover-around-draw-center">hover-around-draw-center</button>
    <button class=" hover-around hover-around-spin">hover-around-spin</button>
    <button class=" hover-around hover-around-spin hover-around-spin-circle">circle</button>
    <button class=" hover-around hover-around-spin hover-around-spin-thick">thick</button>

    <button class=" hover-around hover-around-spin hover-around-spin-circle" style="height: 200px; width: 200px">
      <i class="iconfont icon-wechat" style="font-size: 50px"></i>
    </button>

    <div class="ico-circle ">具</div>
  </div>

</template>

<script>
  import mixinImg from '@/assets/images/test/mixin.jpg'

  export default {
    layout: 'mixins',
    data() {
      return {mixinImg}
    }
  }
</script>
<style lang="less" module>
  .hover-around {
    display: inline-block;
    .hover-around()
  }

</style>
