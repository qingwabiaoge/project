<template>
    <div class="carousel" @mouseenter="enter" @mouseleave="leave">
        <transition-group tag="ul" enter-active-class="animated lightSpeedIn"
                          leave-active-class="animated lightSpeedOut">
            <li v-for='(image,index) in img' :key='image' v-if="index === mark">
                <a href="javascript:;">
                    <img :src="image">
                </a>
            </li>
        </transition-group>
        <div class="bullet">
            <span v-for="(item,index) in img.length" :class="{'active':index === mark}" @click="change(index)"
                  :key="index"></span>
        </div>
        <div class="switch">
            <span class="prev" @click="prev">&lt;</span>
            <span class="next" @click="next">&gt;</span>
        </div>
    </div>

</template>
<script>
    export default {

        data() {
            return {
                mark: 0,
                img: [
                    'http://www.jq22.com/demo/vueLbt201803141802/images/a1.png',
                    'https://www.baidu.com/img/bd_logo1.png?where=super',
                    'http://www.jq22.com/demo/vueLbt201803141802/images/a3.png',
                    'http://www.jq22.com/demo/vueLbt201803141802/images/a4.png'
                ],
                time: null
            }
        },
        methods: {   //添加方法
            change(i) {
                this.mark = i;
            },
            prev() {
                this.mark--;
                if (this.mark === -1) {
                    this.mark = 3;
                    return
                }
            },
            next() {
                this.mark++;
                if (this.mark === 4) {
                    this.mark = 0;
                    return
                }
            },
            autoPlay() {
                this.mark++;
                if (this.mark === 4) {
                    this.mark = 0;
                    return
                }
            },
            play() {
                this.time = setInterval(this.autoPlay, 3000);
            },
            enter() {
                console.log('enter')
                clearInterval(this.time);
            },
            leave() {
                console.log('leave')
                this.play();
            }
        },
        created() {
            this.play()
        }
    }


</script>
<style>

    .carousel {
        width: 500px;
        height: 300px;
        overflow: hidden;
        margin: 100px auto;
        position: relative;
    }

    .carousel ul {
        width: 100%;
        height: 100%;
    }

    .carousel ul li {
        position: absolute;
    }

    .carousel ul li a img {
        width: 500px;
        height: 300px;
    }

    .bullet {
        position: absolute;
        font-size: 0;
        bottom: 20px;
        left: 50%;
        margin-left: -42px;
    }

    .bullet span {
        display: inline-block;
        width: 10px;
        height: 10px;
        background-color: #ffffff;
        margin-left: 15px;
        border-radius: 10px;
    }

    .bullet span:first-child {
        margin-left: 0;
    }

    .switch {

    }

    .switch span {
        position: absolute;
        width: 50px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        background-color: rgba(0, 0, 0, .1);
        font-size: 20px;
        color: #ffffff;
        top: 50%;
        margin-top: -25px;
        cursor: pointer;
        font-family: "宋体";
    }

    .switch span:hover {

        background-color: rgba(0, 0, 0, .5);

    }

    .prev {
        left: 0;
    }

    .next {
        right: 0;
    }

    .active {
        background-color: red !important;
    }

</style>