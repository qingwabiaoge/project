<template>
    <div @mouseover="stopTimer"
         @mouseout="startTimer"
    >
        <div
                :style="{height:(height+'px')||'auto'}" style="position: relative">
            <transition-group
                    tag="div"
                    enter-active-class="animated slideInRight"
                    leave-active-class="animated slideOutLeft"


            >
                <!-- v-if="show"-->

                <router-link v-for="(item,index) in cur"
                             :key="item.image"
                             style="display: block"
                             :to="{path:item.href||'#'}"
                             v-if="show">
                    <img :src="item.image"
                         :style="{position:'absolute',left:`${toPercent(index*0.3)}`,width:`${toPercent(0.3)}`}"
                         alt="item.title">
                </router-link>

            </transition-group>
        </div>
        <div v-if="pagination" class="text-center">
            <div v-for="item in page+1"
                 @click="index=item-1"
                 class="border-circle background-default-transparent text-center inline "
                 style="width: 20px; height: 20px;line-height:20px;  margin-left: 5px"
                 :style="{marginTop:-paginationIndexBottom+'px'}"
                 :class="item-1===index? $style.active:''">
                <span v-if="paginationIndex">{{item}}</span>
            </div>
        </div>
        <div v-if="navigation">
            <a @click="back"> < </a> <a @click="goto"> > </a>
        </div>
    </div>
</template>

<script>
    export default {

        data() {
            return {
                interval: null,//声明this.interval定时器
                index: 0, //#1当前屏显示的幻灯片第一个
                show: true, //为动画设置了v-if show和!show
            }
        },
        props: ['sliderData', 'number', 'animate', 'stopTime', 'transitionTime', 'pagination', 'paginationIndex', 'paginationIndexBottom', 'navigation', 'height'],
        computed: {
            //index的可取的最大值,因为考虑到一屏多个幻灯片所以page不等于sliderData.length
            page() {
                return (this.sliderData.length - this.number)
            },
            //当前屏显示的幻灯片和#1对应
            cur() {
                return this.sliderData.slice(this.index, this.index + this.number)
            }
        },
        methods: {
            toPercent(point) {
                let str = Number(point * 100).toFixed(1);
                str += "%";
                return str;
            },
            goto() {//前进按钮和定时器前进触发此函数
                this.show = false
                setTimeout(() => {//加动画
                    this.index++
                    if (this.index > this.page) {//超出图片数目归零
                        this.index = 0
                    }
                    this.show = true
                }, this.transitionTime)
            },
            back() {//后退按钮触发此函数
                this.show = false
                setTimeout(() => {//加动画
                    this.index--;
                    if (this.index < 0) {//小于零时赋值图片最大数目
                        this.index = this.page
                    }
                    this.show = true
                }, this.transitionTime)

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

<style lang="less" module>

    .active {
        background: @global-color-primary !important;
        color: white
    }
</style>
