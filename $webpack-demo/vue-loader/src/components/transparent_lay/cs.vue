<template>
    <div>
        <button @click="value=true">按钮</button>
        <transparent_lay v-model="value"></transparent_lay>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                value: false
            }
        }
    }
</script>

<style lang="less" module>

</style>