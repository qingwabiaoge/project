<template>
    <div>
    <picCard :data="data">

    </picCard>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                data: []
            }
        },
        async created() {
            const {componentDatas}= await this.$api.get('/getComponentDatas', {params:{componentName: 'picCard'}});
            this.data=componentDatas

        }
    }
</script>

