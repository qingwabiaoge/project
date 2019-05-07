<template>
    <div>
        <img :src="img" alt="">
        <img src="@/static/img/1.png" alt="">
    </div>
    
</template>

<script>
    const img = require('@/static/img/1.png')
    export default {

        data() {
            return {img}
        }
    }
</script>

<style lang="less" scoped>

</style>