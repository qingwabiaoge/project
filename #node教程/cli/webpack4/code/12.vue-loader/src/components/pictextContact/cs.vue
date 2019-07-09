<template>
    <div>
        <pictextContact :data="pictextContactData"></pictextContact>
    </div>

</template>
<script>
    import pictextContact from '@/components/pictextContact/'

    export default {
        data() {
            return {
                pictextContactData: []
            }
        },
        components: {pictextContact},
        async created() {
            const {componentDatas} = await this.$api.get('/getComponentDatas', {params: {componentName: 'pictextContact'}});
            this.pictextContactData = componentDatas

        }

    }
</script>