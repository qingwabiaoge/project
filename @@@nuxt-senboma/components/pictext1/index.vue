<template>
<!--    v-if不能放到最外层目录会和mixin里的this.$style冲突-->
    <div>
        <div :class="$style['pictext']" v-if="data.show">
            <el-row>

                <el-col :md="12" :xs="24">
                    <img v-lazy="data.image" alt="title">

                </el-col>

                <el-col :md="{span:8 ,offset:2}" :xs="{span:24 ,offset:0}">
                    <section>
                        <h3>{{data.subtitle}}</h3>
                        <h2>
                            {{data.title}}
                        </h2>
                        <div></div>
                        <h3 class="hidden-md-and-down">
                            {{data.info}}
                        </h3>
                        <p>
                            {{data.description|setLength(50)}}...
                        </p>
                        <nuxt-link :to="data.href">
                            <span></span>
                            <base-button>

                                {{data.button}}

                            </base-button>
                        </nuxt-link>
                    </section>

                </el-col>

            </el-row>


        </div>

    </div>
</template>

<script>
    import mixin from '@/mixins/conponent-mixin'

    export default {
        name: 'pictext1',
        mixins: [mixin],

    }
</script>

<style lang="less" module>
    .pictext {
        background: #f1f1f1;

        img {
            object-fit: cover
        }

        section {
            padding: 70px 0;

            > * {
                text-transform: uppercase;
            }

            h2 {
                font-size: 94px;
                margin-top: 0;
                font-family: Arial;
                font-weight: bolder;
                color: @global-color-primary;
            }

            div {
                margin-top: 10px;
                height: 3px;
                width: 30%;
                background: @global-color-primary;
            }

            h3 {
                font-size: 42px;
            }

            p {
                font-size: 16px;
                line-height: 2;

            }

        }

    }
</style>
