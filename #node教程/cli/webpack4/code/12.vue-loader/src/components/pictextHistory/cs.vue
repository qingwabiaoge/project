<template>
    <div>

        <pictextHistory :data="pictextHistoryData"></pictextHistory>
    </div>
</template>

<script>
    import pictextHistory from '@/components/pictextHistory/index.vue'
    export default {

        data() {
            return {
                pictextHistoryData:null
            }
        },
        components:{
            pictextHistory
        },

        async created() {
            const {componentDatas} = await this.$api.get('/getComponentDatas', {params: {componentName: 'pictextHistory'}});
            this.pictextHistoryData = componentDatas

        }
    }


</script>