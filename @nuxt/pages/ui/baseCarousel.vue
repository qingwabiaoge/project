<template>
  <baseCarousel :carouselData="[this.$store.state.test[0], this.$store.state.test[0], this.$store.state.test[0]]"
              :number="3"
              animation='fade'
              :stopTime="5000"
              :transitionTime="100"
              pagination="dot"
              :paginationIndex="true"
              :paginationIndexBottom="100"
              :navigation="true"
              :height="300">
    <!--   data:幻灯片数组
            number: 3,//显示幻灯片数量
            :animation='"fade"'//vue自带切换动画名
            switchTime: 4000, //定时切换
            transitionTime: 200,//为切换动画提供切换时间
             :pagination="true"  //显示导航
        :paginationIndex="true" //显示导航序号
        :navigation="true"
        :paginationIndexBottom距離底部的像素數
    -->

  </baseCarousel>


</template>


