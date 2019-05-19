<template>
    <listScale :data="listScaleData">

    </listScale>

</template>

<script>
    import listScale from './index.vue'

    export default {
        data() {
            return {listScaleData: []}
        },
        components: {listScale},

        async created() {
            const {componentDatas} = await this.$api.get('/getComponentDatas', {params: {componentName: 'listScale'}});
            this.listScaleData = componentDatas
        }
    }
</script>