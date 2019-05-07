<template>
    <div class=" row row-children-padding-remove">
        <nuxt-link :to="{path:item.href}"
                     class="col-md-4 uk-inline hover-child-image-fade hover-child-image-scale"
                     v-for="(item,index) in data"
                     :key="item.title+index">

            <img v-lazy="item.image" alt="">
            <div :class="$style.flex">
                <div class="uk-text-uppercase ">
                    <h2 class="color-white">{{item.title}} </h2>
                    {{item.subtitle}}
                </div>
            </div>

        </nuxt-link>

    </div>

</template>

<script>
    export default {
        data() {
            return {}
        },
        props: {
            data: {
                type: Array,
                default: []
            }
        }
    }
</script>


<style lang="less" module>


    .flex {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: #999;
        z-index: 2;
    }
</style>



