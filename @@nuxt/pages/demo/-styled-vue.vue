<template>
    <div>
        <img class="img" :src="img" alt="">

        <div class="first" :class="$style['font']">hello there!
            <span>span</span>
        </div>

    </div>
</template>

<script>
    import mixin from '@/mixins/conponent-mixin'
    import {less} from 'styled-vue'
    import {modularScale, backgroundImages} from 'polished'
    import img from '@/assets/images/test/image1.jpg'

    export default {
        mixins: [mixin],
        layout: 'demo',
        data() {
            return {
                height: 0,
                imgWidth: 0,
                imgHeight: 0,
                img,
                color: '#000',
                primary: 'red'
            }
        },
        //  background-image: url(${vm => vm.img});

        mounted() {
            this.height = document.documentElement.clientHeight
            this.imgWidth = document.getElementsByClassName('img')[0].width
            this.imgHeight = document.getElementsByClassName('img')[0].height
        },

        //-------------------------------------------
        //vm => vm.color只是个表达式 只是个值
        style: less`
    .first {
      color: ${vm => vm.color};
      background-color: ${vm => vm.$store.state.primary};
      background-image: url("../../assets/images/test/image2.jpg");
      font-size: ${modularScale(2)};
      height:${vm => vm.height + 'px'};
       height: ${vm => vm.imgHeight + 'px'};
      &>span{
       color:yellow;
      }
    }

  `
    }
</script>
<!--可以和module一起使用-->
<style module>
    .font {
        margin: 30px;
    }

</style>
