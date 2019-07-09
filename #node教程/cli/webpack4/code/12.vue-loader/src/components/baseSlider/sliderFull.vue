<template>

    <baseSlider :sliderData="data"
                :number="1"
                animate='fade'
                :switchTime="4000"
                :transitionTime="200"
                :pagination="true"
                :paginationIndex="false"
                :paginationIndexBottom="100"
                :navigation="false"

    >
        <!--   data:幻灯片数组
                number: 3,//显示幻灯片数量
                :animate='"fade"'//vue自带切换动画名
                switchTime: 4000, //定时切换
                transitionTime: 200,//为切换动画提供切换时间
                 :pagination="true"  //显示导航
            :paginationIndex="true" //显示导航序号
            :navigation="true"
        -->

    </baseSlider>


</template>

<script>
    export default {

        data() {
            return {
                data: [],

            }
        },


        async mounted() {
            const {componentDatas} = await this.$api.get('/getComponentDatas', {params: {componentName: 'sliderFull'}});
            this.data = componentDatas

        }
    }

</script>


