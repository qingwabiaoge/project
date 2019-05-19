<template>

    <div class="uk-background-default   "
         style="margin-bottom: 10px"
    >
        <div class="hover-child-image-scale">
            <img v-lazy="item.imgurl">
        </div>
        <div class="uk-padding-large uk-padding-bottom ">
            <h4>{{item.title}}</h4>
            <p v-if="item.description" class="uk-padding-top-small">{{item.description}}</p>
            <div class="uk-margin-top-small"
                 style="height: 80px; overflow: hidden"
                 v-if="item.color">

                <span style="padding: 2px 5px;"
                      class="uk-background-primary color-white ">
                    色彩:</span> {{item.color}}

            </div>
            <baseButton class="uk-margin-top" size="small">点击咨询</baseButton>
        </div>

    </div>


</template>

<script>
    export default {
        props: {item: Object, default: null},
        computed: {
            // colorArray() {
            //     return this.item ? this.item.color.split('|') : []
            // }
        }
    }
</script>

