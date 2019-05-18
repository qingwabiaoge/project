<template>
    <div>

        <img v-lazy="imgSrc" @click="viewImg">
        <!-- 放大图片 -->
        <zoom ref="zoom" :imgSrc="imgSrc" ></zoom>
    </div>
</template>

<script>
    import zoom from './index';
    import imgSrc from '@/assets/images/pic.svg'
    export default {
        data() {
            return {
                imgSrc:imgSrc
            }
        },
        components: {
            zoom
        },
        methods: {
            viewImg(){
                this.$refs.zoom.show=true
            },
        }
    }
</script>
