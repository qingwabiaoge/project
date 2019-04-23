<template>
  <div>

    <!--本组件的所有图片都可以使用webpack处理图片,都会生成绝对目录或者base64-->

    <!--#1.@只有src 和require('')可以用-->
    <img src="@/assets/images/1.jpg" alt=""> <br>

    <!--#1.相对目录-->
    <img src="./1.jpg" alt=""> <br>
    <img src="./2.jpg" alt=""><br>


    <!--#1.变量-->
    <img :src="imgurl">


    <div :style="{background:`url(${imgurl}) center`}">
      组件背景(require)
    </div>
    <div class="bg">
      组件背景(.bg)
    </div>
    <mydiv :background="imgurl">
      styled组件背景
    </mydiv>

  </div>

</template>

<script>

  import styled from 'vue-styled-components'

  const props = {background: String}
  const mydiv = styled('div', props)
    `
    width: 50px;
    height: 50px;
    background:url(${props => props.background}) ;
    `

  export default {

    data() {
      return {
        imgurl: require('@/assets/images/1.jpg'),
        src: require('./2.jpg')
      }
    },
    components: {mydiv}
  }
</script>

<style lang="less">

  .bg {
    //这里的图片不能用别名@,可以用webpack处理
    background-image: url("./2.jpg")
  }

</style>
