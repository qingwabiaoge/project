<template>
    <icolist :data="data"></icolist>
</template>

<script>
    export default {
        data() {
            return {
                data: []
            }
        },
       async mounted() {

         await this.$store.dispatch('getComponentDatas', 'icolist');
            this.data = this.$store.state.componentDatas.icolist
        }
    }

</script>