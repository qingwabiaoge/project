<template>


    <div :class="$style.module"
         :style="{background:`url(${bg}) center`}"
         class="flex flex-column "
         style=" height: 638px; color: white; justify-content: flex-end;align-items: flex-end "
         v-if="data"
    >
        <section class="container text-right">
            <div class=" inline text-left margin-bottom"
                 style="width:553px; padding :45px 55px;background: rgba(255,219,155,0.4)">
                <h2 class="color-white" style="font-size: 27px;">{{cur.title}}</h2>
                <p style="padding: 25px 0">{{cur.description}}</p>
            </div>
        </section>
        <!--导航-->
        <ul class="container flex flex-between">
            <li class="inline text-center "
                :class="{[$style.active]:cur===item}"
                style=" width: 55px; height: 66px;  padding-top: 22px ;margin-bottom: 12px;"
                v-for="item in tabs"
                @click="click(item)">
                <span> {{item.title}}</span>
            </li>
        </ul>
        <!--时间线-->
        <div>

        </div>
    </div>


</template>
<script>

    export default {

        data() {
            return {
                cur: []
            }
        },
        props: {
            data: Array,
        },
        methods: {
            click(item) {
                this.cur = item
            }
        },
        computed: {
            bg() {
                return this.data[0].image
            },
            tabs() {
                return (this.data||[]).slice(1, this.data.length + 1)
            }
        },
        created(){
            //data属性更新(网络更新),creade mouted 什么的不行,网络更新没结束那些生命周期就结束了,切哪些生命周期函数只运行一次

                this.cur = this.data[1]


        }


    }

</script>

<style lang="less" module>
    .module {

        li:after {
            content: '';
            position: absolute;
            top: 68px;
            left: 26.5px;
            width: 2px;
            height: 18px;
            background: #888;
        }
        & > div {
            height: 8px;
            width: 90%;
            margin: 0 auto 56px;
            background: url("../../assets/images/timeline.png") repeat;
        }

    }

    .active {
        background: url("../../assets/images/tabbg.png");
        color: #000;
    }
</style>
