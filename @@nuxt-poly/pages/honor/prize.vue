<template>
    <div>


        <el-row :gutter="20"

                class="infinite-list"
                v-infinite-scroll="load"
                style="overflow:auto;"
                :style="{height:height+'px' }">

            <el-col :md="6" :lg="4" v-for="item of list" :key="item.img" class="infinite-list-item"
                     >
                <el-card :body-style="{ padding: '0px' }">
                    <img v-lazy="item.img"
                         @click="dialogVisible=true; dialogTitle=item.title; dialogImg=item.img"
                         class="image">
                    <div style="padding: 10px"  :title="item.title">
                        <span>{{item.title}}</span>
                    </div>
                </el-card>

            </el-col>
        </el-row>


        <el-dialog
                :title="dialogTitle"
                :visible.sync="dialogVisible"
                center>
            <img :src="dialogImg" alt="">

        </el-dialog>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                count: 0,
                total: 11,
                height: 0,
                dialogVisible: false,
                dialogTitle:'',
                dialogImg:''

            }
        },
        methods: {
            load() {

                this.count += 4
            }
        },
        mounted() {

            this.height = document.documentElement.clientHeight
        },
        computed: {
            list() {
                const r = require.context('../../assets/images/prize/', true, /(\w|[\u4e00-\u9fa5])+\.(jpg)$/);
                const arr = r.keys()

                function getFileName(item) {
                    const str1 = item.split('/')[item.split('/').length - 1]
                    const str2 = str1.split('.')[0]
                    return str2
                }

                return arr.map(item => ({img: r(item), title: getFileName(item)}))

            }
        }
    }
</script>
