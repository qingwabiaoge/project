<template>

    <baseSlider :sliderData="sliderData"
                :number="3"
                animate='fade'
                :stopTime="1000"
                :transitionTime="0"
                :pagination="'dot'"
                :paginationIndex="true"
                :navigation="true"
                :height="300"
    >
        <!--   data:幻灯片数组
                number: 3,//显示幻灯片数量
                :animate='"fade"'//vue自带切换动画名
                switchTime: 4000, //定时切换
                transitionTime: 200,//为切换动画提供切换时间
                 :pagination="true"  //显示导航
            :paginationIndex="true" //显示导航序号
            :navigation="true"
            :paginationIndexBottom距離底部的像素數
        -->

    </baseSlider>


</template>

<script>
    export default {
        data() {
            return {
                sliderData: [
                    {
                        image: 'http://img.hb.aicdn.com/ee9c62e8caf1b7907072b90b8058b87b2b92b237102ea-4LB0wq_sq320',

                    },
                    {
                        image: 'http://img.hb.aicdn.com/c7d5ee0fd7a106d8fa08014a630f7e45854b41e7202111-W1UFR4_fw658',

                    },
                    {
                        image: 'http://img.hb.aicdn.com/83254a10cc8de9f457a76dd1b90534e5eefc1de44f5c4-c1N0Rn_fw658',

                    },
                    {
                        image: 'http://img.hb.aicdn.com/01d41e243c6509262c906ed1cd5133d2c01c1b4953e162-XW3yzD_fw658',

                    },
                    {
                        image: 'http://img.hb.aicdn.com/bd1203e020c326403d8cdf52fc817353c2f6023212c12-cZ8VQV_fw658 ',

                    },
                    {
                        image: 'http://img.hb.aicdn.com/fbf58ba1e69e4c1cff373c4ecf97db202c88aa10fd224-kxszi9_fw658',

                    }

                ],


            }
        },

    }
</script>

<style lang="less" module="">

</style>
