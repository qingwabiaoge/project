<template>
    <div>
    <listCard :data="data">

    </listCard>

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
            const {componentDatas}= await this.$api.get('/getComponentDatas', {params:{componentName: 'listCard'}});
            this.data=componentDatas

        }
    }
</script>

