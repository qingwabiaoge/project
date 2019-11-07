<template>
    <el-row class="shadow-small background-default">

        <el-col :md="12" class="hover-child-image-scale">
            <img v-lazy="data.image" :alt="data.title" style="object-fit: cover;">
        </el-col>
        <el-col :md="12" class="padding-left-large padding-right-lg article flex flex-middle ">
            <div>
                <h2>{{data.title}}</h2>
                <h5 class="text-uppercase">{{data.subtitle}}</h5>
                <p class="margin-top-small">{{data.description}}</p>

                <baseButton class="margin-medium-top">
                    <a :href="data.href">了解我们</a>
                </baseButton>
            </div>
        </el-col>


    </el-row>

</template>

<script>
    import mixin from '@/mixins/conponent-mixin'

    export default {
        mixins: [mixin],

    }


</script>



