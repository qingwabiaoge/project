<template>

        <el-row :gutter="80">
            <el-col :xl="6" :md="12" :gutter="30" v-for="item in picAdata">
                <picA :item="item">
                </picA>
            </el-col>
        </el-row>


</template>

<script>
    import picA from '@/components/picA/index.vue'

    export default {
        data() {
            return {picAdata: []}
        },
        components: {picA},
        async created() {
            const {articles} = await this.$api.get('/getArticles', {params: {category: '公司新闻'}, limit: 4});
            this.picAdata = articles
        }
    }
</script>