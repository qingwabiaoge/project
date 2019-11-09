<template>
    <div class="container" :class="$style.contact">
        <el-row :gutter="25">
            <el-col :md="12">
                <img :src="data.image" :alt="data.title">
            </el-col>
            <el-col :md="12" tag="main">

                <h1>{{data.title}}
                    <small>{{data.name}}</small>
                </h1>
                <hr>
                <i class="el-icon-phone-outline"></i>
                <pre>{{data.tel}}</pre>

                <i class="iconfont icon-qq "></i>
                <pre>{{data.qq}}</pre>
                <i class="iconfont icon-conpany"></i>
                <pre>ADDRESS:{{data.address}}</pre>
            </el-col>

        </el-row>
            <section v-html="data.content"></section>
        <section>

            <img :src="data.map">

        </section>

    </div>
</template>
<script>
    import mixin from '@/mixins/conponent-mixin'

    export default {
        layout: 'ui',
        mixins: [mixin]
    }
</script>

<style lang="postcss" module>

    .contact {

        padding: 20px;
        margin-top: 20px;

        h1 {
            text-transform: uppercase;
        }

        main {
            line-height: 2;
        }

        pre {
            margin: -28px 0 0 25px;
        }

        section {
            margin-top: 30px;
        }
    }
</style>