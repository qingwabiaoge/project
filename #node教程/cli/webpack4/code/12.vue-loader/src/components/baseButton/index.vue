<template>


    <button class=" hover-around hover-around-draw" :class="[size?$style['button-'+size]:'' ]">
        <slot>
            查看更多>
        </slot>

    </button>


</template>
<script>
    export default {
        props: {
            type: {
                type: String,
                default: 'default'
            },
            size: {
                type: String,
                default: 'default'
            }
        }
    }

</script>

<style lang="less" module>

    .button-default {
        padding: 17px 54px;
        font-size: @global-font-size-h4!important;
    }

    .button-small {
        padding: 10px 24px;
        font-size: @global-font-size-h5!important;
    }
    .button-smaller {
        padding: 5px 8px;
        font-size: @global-font-size-h6!important;
        border-color: @global-color-gray-lighter!important;
        color: @global-color-gray;
    }
    .button-inverse {
        border-color: #999;
    }

</style>

