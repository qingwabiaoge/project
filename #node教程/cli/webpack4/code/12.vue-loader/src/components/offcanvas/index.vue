<template>
    <div>
        <div :class="[$style['offcanvas-menu'],
                'background-default-transparent',
                {[$style.open]:isOpen}]">
            <slot>....</slot>
        </div>

    </div>
</template>
<script>
    export default {
        props: {
            isOpen: {
                type: Boolean,
                default: true
            }
        }

    }

</script>

<style lang="less" module>

    @offcanvas-menu-width: 300px; //菜单宽度
    @offcanvas-blur: 0px; //打开菜单内容部分呢模糊程度,为0为不模糊
    @offcanvas-content-push-width: 0px; //为为不推动的效果@offcanvas-menu-width;
    @offcanvas-zindex: 1901; //offcanvas菜单z-index

    .offcanvas-menu {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        z-index: @offcanvas-zindex;
        background: #fff;
        width: @offcanvas-menu-width;
        transform: translateX(-100%);
        box-shadow: 2px 0px 5px #aaa;
        transition: all 0.4s;
        &.open {
            transform: translatex(0);
        }
    }

    /* .offcanvas-content {

       &.open {
         transform: translatex(@offcanvas-content-push-width);
         filter: blur(@offcanvas-blur)
       }
     }
   */

</style>
