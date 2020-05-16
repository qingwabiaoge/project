<template>

    <el-row class="shadow-small" :class="$style.pictext3">

        <el-col :md="12">
            <figure>
                <img v-lazy="data.image" :alt="data.title" ref="img">
            </figure>
        </el-col>
        <el-col :md="12">

            <section :style="{'--img-height':imgHeight+'px'}"><h2>{{data.title}}</h2>
                <h5 class="text-uppercase">{{data.subtitle}}</h5>
                <p class="margin-top-small">{{data.description}}</p>

                <button1 class="margin-medium-top">
                    <a :href="data.href">了解我们</a>
                </button1>
            </section>
        </el-col>


    </el-row>

</template>

<script>
    import mixin from '@/mixins/conponent-mixin'

    export default {
        mixins: [mixin],
        data() {
            return {
                imgHeight: 0
            }
        },
        mounted() {
            const el = this.$refs.img
            el.onload = () => {
                this.imgHeight = this.$refs.img.offsetHeight
            }


        }

    }


</script>


<style lang="less" module>


    .pictext3 {
        figure {
            overflow: hidden;
            img {
                transition: all 0.5s;
            }

            &:hover {
                img {
                    transform: scale(1.1, 1.1);
                }
            }
        }

        section {
            display: flex;
            height: var(--img-height);
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            padding-left: 30px;
        }
    }

</style>
