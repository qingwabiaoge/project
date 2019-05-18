<template>

    <articleA :data="articleAdata"></articleA>
</template>

<script>
    import articleA from '@/components/articleA/index.vue'

    export default {

        data() {
            return {
                articleAdata: {}
            }
        },
        components: {articleA},
        async mounted() {
            const {article} = await this.$api.get('/getArticleById/5bbb45e2d1abc623c8649325');
            this.articleAdata = article

        }
    }


</script>
