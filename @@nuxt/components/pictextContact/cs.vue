<template>
    <div>
        <pictextContact :data="pictextContactData"></pictextContact>
    </div>

</template>
<script>
  import mixin from '@/mixins/conponent-mixin'
    import pictextContact from '@/components/pictextContact/'

  export default {
    mixins:[mixin],
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
