<template>
    <div style="background: #aaa">
        <img src="@/assets/images/test/image1.jpg" alt="">
<!--        不支持svg暂时-->
        <img src="@/assets/images/test/logo.svg" alt="">
        <img :src="img" alt="svg">
        <div style="height: 500px" :style="{background:`url(${img})`}">

            <img src="../../assets/images/test/image1.jpg" alt="">

            <div style="height:500px;background:url('../../assets/images/test/image1.jpg')">
                这个不可以
            </div>
        </div>
    </div>

</template>

<script>

    import img from '@/assets/images/test/image1.jpg'
    import svg from '@/assets/images/test/logo.svg'

    export default {
        layout: 'demo',
        data() {
            return {img, svg}
        }
    }

</script>