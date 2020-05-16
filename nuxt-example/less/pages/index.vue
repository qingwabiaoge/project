<template>
  <!--  外面包括一层防止组件mixin覆盖背景-->
  <div>
    <div class="punchy">
      <style>
        :root {
        //记得末尾带; --hero-image: url('{{ heroImage }}');
        }
      </style>

      <h1>Pow.</h1>

    </div>
  </div>
</template>
<script>
import img from '@/assets/image.jpg'


export default {
  layout: 'demo',
  data () {
    return {
      heroImage: img,
    }
  },


}

</script>
<style scoped lang="less">
  @primary: var(--primary-color); //主色调

  .punchy {
    width: 250px;
    height: 250px;
    background-image: var(--hero-image);
    background-size: cover;
    border: 4px solid var(--primary-color);
    display: inline-block;
    color: var(--primary-color);


    h1 {
      color: @global-color;
    }
  }


</style>
