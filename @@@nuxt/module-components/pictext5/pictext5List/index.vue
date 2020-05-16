<template>
    <div class="container" v-if="data.show"
         style="margin-bottom: 90px">
        <el-row :gutter="5">
            <el-col :md="12" v-for="item in data.children" :key="item.title">

                <pictext5 :data='item'
                          placement="left"
                          :height="500">
                </pictext5>

            </el-col>

        </el-row>


    </div>
</template>
<script>
    import mixin from '@/mixins/conponent-mixin'
    import mapMixin from '@/mixins/page-mixin'

    export default {
        mixins: [mixin, mapMixin],
    }
</script>
