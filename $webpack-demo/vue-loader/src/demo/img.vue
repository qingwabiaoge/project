<template>
    <div class="img">
        <img :src="img" alt="">
        <!--模版中引入-->
        <img src="@/static/img/1.png" alt="">
    </div>
    
</template>

<script>
    //程序中引入
    const img = require('@/static/img/1.png')
    export default {

        data() {
            return {img}
        }
    }
</script>

<style lang="less" scoped>
    /*css中引入这个和程序无关的,就是普通的css*/
.img{
    background: url('../static/img/1.png');
}
</style>