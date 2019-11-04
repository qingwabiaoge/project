<template>
    <div>

        <div class="title" :class="$style['font']">hello there!
            <span>span</span>
        </div>

        <img class="img" src="./2.jpg" alt="">
        <div class="cs ">
            1111
        </div>
    </div>
</template>

<script>
    import mixin from '@/mixins/conponent-mixin'
    import {css} from 'styled-vue'
    import {modularScale, backgroundImages} from 'polished'

    export default {
        mixins: [mixin],
        data() {
            return {height: 0, imgWidth: 0, imgHeight: 0}
        },
        props: {color: String, primary: Boolean},

        mounted() {
            this.height = document.documentElement.clientHeight
            this.imgWidth = document.getElementsByClassName('img')[0].width
            this.imgHeight = document.getElementsByClassName('img')[0].height
        },

        //-------------------------------------------
        //vm => vm.color只是个表达式 只是个值
        style: css`
    .title {
      color: ${vm => vm.color};
      background-color: ${vm => vm.$store.state.color_primary};
      background-image: url("./1.jpg");
      font-size: ${modularScale(2)};
      height:${vm => vm.height + 'px'}

    }

     .title>span{
  color:yellow;
      }
      .cs {
      background: ${vm => vm.primary ? 'yellow' : ''};
      border:1px solid #0f81cc;
      display: inline-block;
      width: ${vm => vm.imgWidth + 'px'};
      height: ${vm => vm.imgHeight + 'px'};
      }
  `
    }
</script>
<!--可以和module一起使用-->
<style module>
.font{
    margin: 30px;
}

</style>