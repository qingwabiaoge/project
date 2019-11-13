<template>
    <!--上下不正确是v-lazy引起的-->
    <client-only>
        <div v-masonry transition-duration="1s" item-selector=".item" class="masonry-container">
            <div v-masonry-tile class="item"
                 v-for="(item,index) in data.children"
                 :key="item.image+index">
                <pic-e :data="item" width="300"></pic-e>
            </div>
        </div>
    </client-only>
</template>
<script>

    import mixin from '@/mixins/conponent-mixin'

    export default {
        mixins: [mixin],


        mounted() {
            if (typeof this.$redrawVueMasonry === 'function') {
                this.$redrawVueMasonry()
            }
        }
    }
</script>