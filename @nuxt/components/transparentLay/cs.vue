<template>
    <div>
        <button @click="value=true">按钮</button>
        <baseTransparentLay v-model="value"></baseTransparentLay>
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
