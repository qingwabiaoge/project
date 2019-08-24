<template>
  <div @mouseover="stopTimer"
       @mouseout="startTimer"
       class="carousel"

  >

    <transition-group
      tag="div"
      :name="animation"
      class="img-wrap"
      :style="{height:height+'px'}"
      mode="out-in">


      <router-link v-for="(item,index) in carouselData"
                   v-show="index===mark"
                   :key="`bashcarousel`+index"
                   :to="{path:item.href||'#'}">
        <img v-lazy="item.image"
             :style="{height:height+'px'}"
             alt="item.title">
      </router-link>

    </transition-group>

    <div v-if="pagination" class="text-center">
      <div v-for="(item,index) in carouselData"
           @click="mark=index"
           class="border-circle background-default-transparent text-center inline "
           style="width: 20px; height: 20px;line-height:20px;  margin-left: 5px"
           :style="{marginTop:-paginationmarkBottom+'px'}"
           :class="mark===index? 'active':''">
        <span v-if="paginationmark">{{index}}</span>
      </div>
    </div>
    <nav v-if="navigation">
      <span>
      <a @click="prev"> < </a> <a @click="next"> > </a>
        </span>
    </nav>
  </div>
</template>

<script>
  export default {

    data() {
      return {
        interval: null,//声明this.interval定时器
        mark: 0, //#1当前屏显示的幻灯片第一个
      }
    },
    props: ['carouselData', 'animation', 'stopTime', 'transitionTime', 'pagination', 'paginationMark', 'paginationMarkBottom', 'navigation', 'height'],

    methods: {

      next() {//前进按钮和定时器前进触发此函数
        this.mark++
        if (this.mark > this.carouselData.length - 1) {//超出图片数目归零
          this.mark = 0
        }

      },
      prev() {//后退按钮触发此函数
        this.mark--;
        if (this.mark < 0) {//小于零时赋值图片最大数目
          this.mark = this.carouselData.length - 1
        }

      }
      ,
      //开始定时器或者暂停后再运行定时器
      startTimer() {
        this.interval = setInterval(() => { //保存定时器到this.interval
          this.next()
        }, this.stopTime);
      },
      stopTimer() {//暂停定时器
        clearInterval(this.interval)
      }
    },
    created() {
      this.startTimer()
    },
    mounted() {


    }
  }

</script>

<style lang="less" scoped>
  .carousel {
    .img-wrap {
      overflow: hidden;

      img {
        object-fit: cover;
      }
    }

    nav {
      span {
        position: relative;
        display: inline-block;
        float: right;
        margin-top: -101px;
        font-size: 45px;
        line-height: 45px;
        padding: 17px 26px;
        background: #333;

        a {
          color: #ccc;
        }

        a:first-child:after {

        }
      }
    }

    .active {
      background: @global-color-primary !important;
      color: white
    }

  }
</style>
