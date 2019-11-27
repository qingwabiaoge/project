<template>

    <div :class="$style['history']">

        <container>
            <el-row>
                <el-col tag="section" :md="12" :offset="12">

                    <h2>{{cur.title}}</h2>
                    <p>{{cur.description}}</p>

                </el-col>
            </el-row>
        </container>
        <!--导航-->
        <ul>
            <li v-for="item in data.children"
                :class="{active:cur===item}"
                @click="cur = item">
                <span> {{item.title}}</span>
            </li>
        </ul>

        <!--时间线图片做背景-->
        <footer>

        </footer>

    </div>


</template>
<script>
    import mixin from '@/mixins/conponent-mixin'
    import TransparentLay from "@/pages/ui/transparent-lay";

    export default {
        components: {TransparentLay},
        mixins: [mixin],

        data() {
            return {
                cur: [],

            }
        },

        methods: {
            click(item) {

            }
        },

        created() {
            //data属性更新(网络更新),creade mouted 什么的不行,网络更新没结束那些生命周期就结束了,切哪些生命周期函数只运行一次
            this.cur = this.data.children[0]

        }


    }

</script>

<style lang="less" module>
    .history {
        padding: 80px 20px 30px;
        background-position: center center;
        background-size: cover;
        position: relative;

        * {
            color: white
        }


        section {
            padding: 30px;
            .background-transparent(@global-color-primary, 0.6);

        }

        ul {
            display: flex;
            margin-top: 100px;
            justify-content: space-around;
        }

        li {
            width: 55px;
            height: 66px;
            padding-top: 22px;
            margin-bottom: 12px;
            text-align: center;
            position: relative;

            &:global(.active) {
                background: url("./bg/tabbg.png");
            }

            &:after {
                content: '';
                position: absolute;
                top: 68px;
                left: 26.5px;
                width: 2px;
                height: 18px;
                background: #888;
            }
        }

        footer {
            height: 18px;
            background: url("./bg/timeline.png") repeat-x;
        }

    }


</style>
