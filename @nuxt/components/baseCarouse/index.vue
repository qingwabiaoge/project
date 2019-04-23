<template>
  <div @mouseover="stopTimer"
       @mouseout="startTimer"
       class="carousel"

  >
    <div>
      <transition-group
        tag="div"
        :name="animation"
        mode="out-in">


        <router-link v-for="(item,arrindex) in carouselData"
                     v-show="arrindex===index"
                     :key="`bashcarousel`+arrindex"
                     :to="{path:item.href||'#'}">
          <img v-lazy="item.image"
               alt="item.title">
        </router-link>

      </transition-group>
    </div>
    <div v-if="pagination" class="text-center">
      <div v-for="(item,arrindex) in carouselData"
           @click="index=arrindex"
           class="border-circle background-default-transparent text-center inline "
           style="width: 20px; height: 20px;line-height:20px;  margin-left: 5px"
           :style="{marginTop:-paginationIndexBottom+'px'}"
           :class="index===arrindex? 'active':''">
        <span v-if="paginationIndex">{{arrindex}}</span>
      </div>
    </div>
    <nav v-if="navigation">
      <span>
      <a @click="back"> < </a> <a @click="goto"> > </a>
        </span>
    </nav>
  </div>
</template>

<script>
  export default {

    data() {
      return {
        interval: null,//声明this.interval定时器
        index: 0, //#1当前屏显示的幻灯片第一个
        carouseHeight: 0
      }
    },
    props: ['carouselData', 'animation', 'stopTime', 'transitionTime', 'pagination', 'paginationIndex', 'paginationIndexBottom', 'navigation', 'height'],

    methods: {

      goto() {//前进按钮和定时器前进触发此函数
        this.index++
        if (this.index > this.carouselData.length - 1) {//超出图片数目归零
          this.index = 0
        }

      },
      back() {//后退按钮触发此函数
        this.index--;
        if (this.index < 0) {//小于零时赋值图片最大数目
          this.index = this.carouselData.length - 1
        }

      }
      ,
      //开始定时器或者暂停后再运行定时器
      startTimer() {
        this.interval = setInterval(() => { //保存定时器到this.interval
          this.goto()
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
    margin-bottom: -22px;
    overflow: hidden;

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
