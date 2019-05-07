<template>
    <div>
        <button @click="value=true">按钮</button>
        <transparentLay v-model="value"></transparentLay>
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
