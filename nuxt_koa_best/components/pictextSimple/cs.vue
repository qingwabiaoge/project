<template>

    <pictextSimple :data="data"></pictextSimple>
</template>

<script>
    export default {

        data() {
            return {
                data: []
            }
        },

        async created() {
            const {componentDatas} = await this.$api.get('/getComponentDatas', {params: {componentName: 'pictextSimple'}});
            this.data = componentDatas

        }
    }


</script>