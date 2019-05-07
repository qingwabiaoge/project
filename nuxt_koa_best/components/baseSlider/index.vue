<template>
  <div @mouseover="stopTimer"
       @mouseout="startTimer"
       class="slider"
  >
    <div>
      <!--  <transition-group
          tag="div"
          enter-active-class="animated slideInRight"
          leave-active-class="animated slideOutLeft"
        >-->
      <!-- v-if="show"-->

      <router-link v-for="(item,arrindex) in sliderData"
                   v-show="arrindex===index"
                   :key="item.image"
                   :to="{path:item.href||'#'}">
        <img v-lazy="item.image"
             alt="item.title">
      </router-link>

      <!--    </transition-group>-->
    </div>
    <div v-if="pagination" class="uk-text-center">
      <div v-for="(item,arrindex) in sliderData"
           @click="index=arrindex"
           class="uk-border-circle uk-background-default-transparent uk-text-center uk-inline "
           style="width: 20px; height: 20px;line-height:20px;  margin-left: 5px"
           :style="{marginTop:-paginationIndexBottom+'px'}"
           :class="index===arrindex? 'active':''">
        <span v-if="paginationIndex">{{arrindex}}</span>
      </div>
    </div>
    <div v-if="navigation" class="navigation">
      <span>
      <a @click="back"> < </a> <a @click="goto"> > </a>
        </span>
    </div>
  </div>
</template>

<script>
  export default {

    data() {
      return {
        interval: null,//声明this.interval定时器
        index: 0, //#1当前屏显示的幻灯片第一个
      }
    },
    props: ['sliderData', 'animate', 'stopTime', 'transitionTime', 'pagination', 'paginationIndex', 'paginationIndexBottom', 'navigation', 'height'],

    methods: {

      goto() {//前进按钮和定时器前进触发此函数
        this.index++
        if (this.index > this.sliderData.length - 1) {//超出图片数目归零
          this.index = 0
        }

      },
      back() {//后退按钮触发此函数
        this.index--;
        if (this.index < 0) {//小于零时赋值图片最大数目
          this.index = this.sliderData.length - 1
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
    }
  }

</script>

<style lang="less" scoped>
  .slider {
  margin-bottom: -22px;
  }

  .navigation {
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
</style>
