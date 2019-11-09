<template>
    <el-row class="shadow-small" :class="$style.pictext3" >

        <el-col :md="12" class="hover-child-image-scale">
            <img v-lazy="data.image" :alt="data.title" style="object-fit: cover;">
        </el-col>
        <el-col :md="12" tag="section">

            <h2>{{data.title}}</h2>
            <h5 class="text-uppercase">{{data.subtitle}}</h5>
            <p class="margin-top-small">{{data.description}}</p>

            <baseButton class="margin-medium-top">
                <a :href="data.href">了解我们</a>
            </baseButton>
        </el-col>


    </el-row>

</template>

<script>
    import mixin from '@/mixins/conponent-mixin'

    export default {
        mixins: [mixin],

    }


</script>


<style lang="postcss" module>
    .pictext3 {
        section {
            height: 500px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            padding-left: 30px;
        }
    }

</style>
