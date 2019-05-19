<template>
    <div>
        {{goods}}
    </div>
</template>
<script>
    export default {
        data() {
            return {goods: ''}
        },
        async mounted() {
            this.goods = await this.$api('getGoodss?category=沙发')
        }
    }
</script>