<template>
    <div class="  flex background-default"
         style="padding: 24px 0 24px 30px;"
    >
        <div class="border-circle background-primary flex flex-center flex-middle"
             style="width: 45px; height: 45px ;padding:10px; color: white; margin-right: 8px">

                <img :src="data.icon"/>

        </div>
        <div>
            <h3 style="font-size: 12px">{{data.subtitle}}</h3>

            <h2 class="color-primary" style="font-size:18px; margin-top: 10px ">{{data.title}}</h2>
        </div>
    </div>
</template>
<script>
    import mixin from '@/mixins/conponent-mixin'

    export default {
        mixins: [mixin],

    }

</script>
<style lang="less" module>


</style>
