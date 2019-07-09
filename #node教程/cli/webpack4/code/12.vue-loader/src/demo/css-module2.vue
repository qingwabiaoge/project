<template>

 <span :class="$style.yellow">
             composes-yellow
            </span>
</template>

<script>

</script>

<style lang="less" module>
    .bg-red {
        background: red
    }

    .yellow {
        composes: bg-red;
        composes: yellow from '@/static/css/yellow.css';
    }


</style>