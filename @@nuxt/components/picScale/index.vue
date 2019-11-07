<template>
    <div :class="$style['image-scale']">

    </div>

</template>


<style lang="less" module>

    //图片放大
    .image-scale {

        & {
            cursor: pointer;
            position: relative;
            overflow: hidden;

        }

        & > img {
            transition: all 0.2s;
            color: var(--primary-color);
            position: relative;
            top: 0;
            left: 0;

        }

        &:hover img {
            overflow: hidden;
            transform: scale(1.1, 1.1);
        }
    }
</style>