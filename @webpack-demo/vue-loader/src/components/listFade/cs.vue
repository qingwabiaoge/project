<template>

    <listFade :data="data"></listFade>
</template>

<script>
    export default {

        data() {
            return {
                data: []
            }
        },


        async mounted() {
          const {componentDatas}= await this.$api.get('/getComponentDatas', {params:{componentName: 'listFade'}});
         this.data=componentDatas

        }
    }


</script>