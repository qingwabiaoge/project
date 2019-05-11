<template>

    <div class="background-default   "
         style="margin-bottom: 10px"
    >
        <div class="hover-child-image-scale">
            <img v-lazy="item.image">
        </div>
        <div class="padding-large padding-bottom ">
            <h4>{{item.title}}</h4>
            <p v-if="item.description" class="padding-top-small">{{item.description}}</p>
            <div class="margin-top-small"
                 style="height: 80px; overflow: hidden"
                 v-if="item.color">

                <span style="padding: 2px 5px;"
                      class="background-primary color-white ">
                    色彩:</span> {{item.color}}

            </div>
            <baseButton class="margin-top" size="small">点击咨询</baseButton>
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

