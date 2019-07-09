<template>


    <div :class="$style['bg-gary']">
        <!--module不用$style.xxx会无效-->
        <div class="blue">
            blue
        </div>
        <div :class="$style.blue">
            blue
            <!--:global全局可用-->
            <span class="green">
               :global(green)
            </span>
        </div>


        <!--:data-role全局可用-->
        <div data-role='test'>
            data-role='test'
        </div>
    </div>


</template>

<script>
    export default {

        mounted() {
            console.log(this)
        }
    }
</script>

<style lang="less" module>
    .bg-gary {
        background: grey;
        span {
            font-weight: bold;
        }
    }

    .blue {
        color: blue;
        :global(.green) {
            color: green;
        }
    }

    /*属性选择器会变全局*/
    [data-role="test"] {
        color: bisque;
    }

</style>