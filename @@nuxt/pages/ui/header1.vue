<template>
    <header1>
        <el-nav></el-nav>
        <template v-slot:drawer>
            <el-nav mode="vertical"></el-nav>
        </template>
    </header1>

</template>
<script>

    export default {

        layout: 'ui'
    }

</script>
