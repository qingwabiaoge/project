<template>
    <div :class="$style['produce']">
        <el-row>
            <el-col :md="12">
                <el-carousel-responsive :data="data"></el-carousel-responsive>
            </el-col>
            <el-col :md="11" :offset="1">
                <h1>
                    {{data.title}}
                </h1>
                <h3>{{"color"|translate}}:</h3>
                <p style="white-space: pre">{{data.color}}</p>

                <!--   <h3>
                     {{"weight"|translate}}:{{data.weight}}
                   </h3>-->

                <p v-html="data.description">

                </p>

            </el-col>
        </el-row>

        <article v-html="data.content">
        </article>
    </div>
</template>

<script>
    import mixin from '@/mixins/conponent-mixin'

    export default {
        mixins: [mixin],
    }
</script>

<style module lang="less">
    .produce {
        text-transform: uppercase;
        background: #fff;
        padding: 50px 20px;

        h1 {
            padding: 26px 0 17px 10px;
            border-bottom: 1px solid #999;
            font-size: 2.5rem;
        }

        h3 {
            padding-left: 10px;
            font-size: 2.2rem;
        }

        p {
            padding-top: 50px;
            line-height: 2;
        }

        article {
            margin-top: 50px;
            padding-top: 50px;
            padding-bottom: 50px;
            border-top: 1px solid #999;
        }

    }

</style>
