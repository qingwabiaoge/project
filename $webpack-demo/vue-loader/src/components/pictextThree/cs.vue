<template>

    <pictextThree :data="data"></pictextThree>
</template>

<script>
    export default {

        data() {
            return {
                data: []
            }
        },

        async created() {
            const {componentDatas} = await this.$api.get('/getComponentDatas', {params: {componentName: 'pictextThree'}});
            this.data = componentDatas

        }
    }


</script>