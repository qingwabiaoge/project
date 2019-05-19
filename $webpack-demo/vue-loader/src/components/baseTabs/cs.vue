<template>
    <div>
        <baseTabs :navs="navs" v-model="value">

        </baseTabs>
        active:{{value}}
    </div>

</template>

<script>
    export default {
        data() {
            return {
                navs: [{value: 'tab1', label: '组件1'},
                    {value: 'tab2', label: '组件2'},
                    {value: 'tab3', label: '组件3'}],
                value: 'tab2'
            }
        }
    }
</script>

<style lang="less" scoped>

</style>
