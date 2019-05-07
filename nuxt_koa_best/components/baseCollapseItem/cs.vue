<template>
    <baseCollapseItem title="标题" v-model="open">
        正文部分
    </baseCollapseItem>
</template>
<script>
    export default {

        data() {
            return {
                open: false
            }
        }
    }

</script>