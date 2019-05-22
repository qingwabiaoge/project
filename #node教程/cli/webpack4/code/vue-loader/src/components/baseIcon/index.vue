<template>

    <div class="uk-inline"
         :class="[$style.wrap,
               circle?`uk-border
               uk-border-circle
               uk-flex-inline
               uk-flex-center
               uk-flex-middle`:'']"
         :style="{width:circle+'px' ,height:circle+'px'}"
    >

        <i class="iconfont"
           :class="'icon-'+icon">


        </i>

    </div>
</template>

<script>
    export default {

        props: {
            icon: String,//ico图标,例如weixin

            circle: String//cirlce大小

        }
    }

</script>

<style lang="less" module>

    .wrap:hover {
        i {
            color: @global-color-primary;
        }
        border-color: @global-color-primary;
    }
</style>
