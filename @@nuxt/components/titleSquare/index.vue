<template>

    <div :class="type?$style['title-square-'+type]:'' ">

        <div>
            <div>

                <slot>
                    热卖产品
                </slot>
            </div>
        </div>

    </div>


</template>
<script>
  import mixin from '@/plugins/mixins'
  export default {
    mixins:[mixin],
        props: {
            type: {
                type: String,
                default: 'default'
            }
        }
    }

</script>

<style lang="less" module>


    //菱形标题
    @title-square-size: 70px; //方框大小
    @title-square-color: @global-background-emphasis; //方框默认颜色
    @title-square-line-width: 20%; //左右两根横线的长度
    @title-square-primary-color: @global-color-primary;
    .title-square(@title-square-color:@global-background-emphasis) {
        position: relative;
        margin-top: @title-square-size/2;
        margin-bottom: @title-square-size/2;
        z-index: 3;
        > div {

            width: @title-square-size;
            height: @title-square-size;
            border: 1px solid @title-square-color;
            text-align: center;
            margin: 0px auto;
            transform: rotate3d(0, 0, 1, 45deg);
            transition: all 1s;
            > div {
                line-height: @title-square-size;
                transform: rotatez(-45deg);
                color: @title-square-color;
                a {
                    color: @title-square-color;
                }
            }

        }
        &:before {

            content: "";
            display: block;
            width: @title-square-line-width;
            height: 2px;
            position: absolute;
            left: 5%;
            top: @title-square-size/2;
            background: @title-square-color;
        }
        &:after {

            content: "";
            display: block;
            width: @title-square-line-width;
            height: 2px;
            position: absolute;
            right: 5%;
            top: @title-square-size/2;
            background: @title-square-color;
        }

    }

    .title-square-default {
        .title-square
    }

    .title-square-primary {
        .title-square(@title-square-primary-color)
    }

    .title-square-inverse {
        .title-square(#fff)
    }

</style>
