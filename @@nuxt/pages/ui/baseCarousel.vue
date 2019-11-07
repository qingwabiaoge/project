<template>
  <baseCarousel
              :number="3"
              animation='fade'
              :stopTime="5000"
              :transitionTime="100"
              pagination="dot"
              :paginationMark="true"
              :paginationMarkBottom="100"
              :navigation="true"
              :height="300">
    <!--   data:幻灯片数组
            number: 3,//显示幻灯片数量
            :animation='"fade"'//vue自带切换动画名
            switchTime: 4000, //定时切换
            transitionTime: 200,//为切换动画提供切换时间
             :pagination="true"  //显示导航
        :paginationMark="true" //显示导航序号
        :navigation="true"
        :paginationMarkBottom距離底部的像素數
    -->

  </baseCarousel>


</template>


<script>
  export default {   layout: 'ui',}
</script>
