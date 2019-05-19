<template>
    <footerBlack :data="data">

    </footerBlack>

</template>

<script>
    import footerBlack from '@/components/footerBlack/index.vue'

    export default {
        data() {
            return {data: []}
        },
        components: {footerBlack},
        async created() {
            const {articles} = await this.$api.get('/getArticles', {params: {category: '公司新闻'}, limit: 4});
            this.data = articles
        }
    }
</script>