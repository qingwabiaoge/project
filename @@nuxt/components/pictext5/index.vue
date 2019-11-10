<template>

    <el-row :class="$style.pictext5">

        <el-col :md="12">
            <figure>
                <img v-lazy="data.image" alt="data.title" ref="img">
            </figure>

        </el-col>

        <el-col :md="12">
            <section ref="section" :style="{'--img-height':imgHeight+'px'}">
                <h2>{{data.title}}</h2>
                <underline :class="$style['underline']" placement="center"><h4>{{data.subtitle}}</h4></underline>
                <p>{{data.description}}</p>
                <h5>【查看更多】</h5>
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
    .pictext5 {
        * {
            transition: all 0.5s;
        }

        .underline {
            margin-top: 30px;

        }

        h4 {
            padding-bottom: 5px
        }

        figure {
            overflow: hidden;
        }

        section {
            padding: 0 30px;
            height: var(--img-height);
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

        }

        &:hover {
            img {
                transform: scale(1.2);
            }

        }
    }


</style>
