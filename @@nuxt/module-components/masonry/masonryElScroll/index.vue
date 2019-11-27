<template>
    <!--上下不正确是v-lazy引起的-->
    <client-only>
        <ul v-masonry transition-duration="0.8s"
            item-selector=".item"
            class="masonry-container infinite-list"
            v-infinite-scroll="load"
            style="overflow:auto;"
            :style="{height:height+'px'}">

            <li v-masonry-tile class="item infinite-list-item"
                v-for="(item,index) in listArray"
                :key="item.image+index">
                <pic-e :data="item" width="300"></pic-e>
            </li>
        </ul>
    </client-only>
</template>
<script>

    import mixin from '@/mixins/conponent-mixin'

    export default {
        mixins: [mixin],
        data() {
            return {
                listArray: [],
                height: 0
            }
        },
        methods: {
            load() {
                this.listArray.push(...this.data.children,...this.data.children,...this.data.children)
            }
        },

        mounted() {
            this.height = document.documentElement.clientHeight
            if (typeof this.$redrawVueMasonry === 'function') {
                this.$redrawVueMasonry()
            }
        }
    }
</script>