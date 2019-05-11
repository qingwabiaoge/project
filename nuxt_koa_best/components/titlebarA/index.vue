<template>
    <div class="  flex background-default"
         style="padding: 24px 0 24px 30px;"
    >
        <div class="border-circle background-primary flex flex-center flex-middle"
             style="width: 45px; height: 45px ;margin-right: 8px">
            <i class="color-white"
               style="font-size: 26px"
               :class="['iconfont', 'icon-'+icon]">
            </i>
        </div>
        <div>
            <h3 style="font-size: 12px">{{title}}</h3>
            <h2 class="color-primary" style="font-size:18px ">{{subTitle}}</h2>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            icon: String,
            title: String,
            subTitle: String
        }
    }

</script>
<style lang="less" module>


</style>
