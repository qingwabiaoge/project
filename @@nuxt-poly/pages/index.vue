<template>
    <el-row :class="$style.index">
        <el-col :md="12">
            <a href="http://www.poty-tl.com/index.php">
                <img src="@/assets/images/index/1.jpg" alt="">
            </a>
        </el-col>
        <el-col :md="12">
            <nuxt-link to="/advantage/">
                <img src="@/assets/images/index/2.jpg" alt="">
            </nuxt-link>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        layout: 'none'
    }

</script>

<style module lang="less">
    .index {

        img {
            width: 100%;
            max-width: 100%;
            object-fit: cover;
        }
    }

</style>