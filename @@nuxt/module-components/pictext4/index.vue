<template>


    <el-row :gutter="20" :class="$style.pictext4">
        <el-col :md="12" v-for="item in data.children" :key="item.image" tag="section"
                :style="{'--bg':`url(${item.image})`}">
            <div>
                <h2>
                    <span class="color-primary">{{item.title}}</span><span>{{item.subtitle}}</span>
                </h2>
                <h3 class="text-uppercase">{{item.info}}</h3>
                <h4>
                    {{item.description}}
                </h4>
                <nuxt-link :to="{path:item.href}">
                    <button1>{{item.button}}</button1>
                </nuxt-link>
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
<style lang="postcss" module>
    .pictext4 {
        section {
            margin: 10px 0;

            & > div {
                padding: 50px 30px;
                background-image: var(--bg);
                background-size: cover;

                button {
                    margin-top: 30px
                }

            }
        }


    }


</style>
