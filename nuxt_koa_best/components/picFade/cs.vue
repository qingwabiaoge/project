<template>

    <picFade :data="data"></picFade>
</template>

<script>
    export default {

        data() {
            return {
                data: []
            }
        },


        async mounted() {
          const {componentDatas}= await this.$api.get('/getComponentDatas', {params:{componentName: 'picFade'}});
         this.data=componentDatas

        }
    }


</script>
