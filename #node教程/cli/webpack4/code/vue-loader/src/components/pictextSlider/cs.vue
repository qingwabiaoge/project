<template>
    <pictextSlider :data="pictextSliderData">

    </pictextSlider>

</template>

<script>
    import pictextSlider from './index.vue'

    export default {
        data() {
            return {
                pictextSliderData: []
            }
        },
        components: {pictextSlider},
        async mounted() {
            const {componentDatas} = await this.$api.get('/getComponentDatas', {params: {componentName: 'pictextSlide'}});
            this.pictextSliderData = componentDatas
        }

    }

</script>