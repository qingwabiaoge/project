<template>
    <!--css=modele不支持 $style.['underline-'+placement],选择了scope-->
    <div :class="[$style['underline'],$style[placementClassName]]"
         :style="{'--primary-color':primary}">
        <slot></slot>
    </div>
</template>
<script>
    import mixin from '@/mixins/conponent-mixin'


    export default {
        mixins: [mixin],
        props: {
            placement: {type: String, default: ""},
        },
        computed: {
            placementClassName() {
                return this.placement ? ['underline-' + this.placement] : ''
            }
        }
    }

</script>
<style lang="less" module>

    //从左边延长
    .underline {
        & {
            display: inline-block;
            position: relative;
        }

        &::after {
            content: "";
            display: inline-block;
            width: 0;
            height: 2px;
            background: var(--primary-color);
            transition: all 0.3s;
            position: absolute;
            bottom: 0;
            left: 0;

        }

        &.active,
        &:hover,
        &:focus
        &:active {
            //color: @hover-underline-color;
            &::after {
                width: 100%;

            }
        }

        //从中间延长
        &-center {

            &::after {
                width: 100%;
                transform: scale(0.5, 1);
            }

            &:hover,
            &:focus
            &:active {
                &::after {
                    width: 100%;
                    transform: scale(1, 1)
                }
            }
        }

        //位置放到了上方
        &-top {
            &::after {
                top: 0px
            }

        }

        //用于竖形导航
        &-left {
            display: inline-block;

            &:hover::after,
            &.active::after {

                height: 100% !important;
                width: 2px !important;
                position: absolute;
                top: 0;
            }
        }


    }


</style>