<!--template被vueloader解析为js-->

<template>


</template>





<script>

    //  vue构造器的配置文件  es6-module输出
    export default {

      style: css`
    .title {
      /* You can access component's "this" via "vm" */
      color: ${vm => vm.$store.state.themeColor};
      font-size: ${modularScale(2)};
      margin: 0;
    }
  `
    }

</script>




<!--style被css-loader解析爲js-->
<style>



</style>
