<template>
    <el-row :gutter="10">
        <el-col :span="8"
                v-for="item in picBdata">
            <picB :item="item">

            </picB>
        </el-col>
    </el-row>
</template>

<script>
    import picB from '@/components/picB/index.vue'

    export default {
        data() {
            return {picBdata: []}
        },
        components: {picB},
        async created() {
            const {goodss} = await this.$api.get('/getGoodss', {params: {category: '幻彩漆'}, limit: 4});
            this.picBdata = goodss
        }
    }
</script>