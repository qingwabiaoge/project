<template>
  <div>

    <h1>模板里引入import img</h1>
    <img :src="img" alt="">




    <h1>模板里使用import img做背景</h1>

    <div :style="{background:`url(${img})`}" >
     在模板里做背景
    </div>



    <h1>模板里使用static做图片</h1>

    <img src="/nuxt.png">




    <h1>模板里使用static做背景</h1>

    <div style="background:url('/image1.jpg')">
      模板里使用static做背景
    </div>


    <h1>模板里直接引入图片</h1>

    <img src="~/assets/image1.jpg">

    <h1>模板里直接引入背景</h1>
    <div style="background:url('~/assets/image1.jpg')">
      <br>
      直接在模板里 <br>做背景不行
    </div>
  </div>


</template>


<script>

  import img from '~/assets/image1.jpg'

  export default {

    data() {
      return {img}
    }
  }

</script>
