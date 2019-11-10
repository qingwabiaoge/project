<template>
    <div class="inverse-color" :class="$style.pictext5">
        <!--如果是组件 data.href存在,如果不是组件则是文章-->
        <nuxt-link :to="data.href">
            <div>

                <img v-if="data.image" v-lazy="data.image" :style="{height: height+'px'}" alt="">
                <section :class="placement?$style[placement]:''">
                    <div>
                        <h3 v-if="data.title">
                            {{data.title}}
                        </h3>
                        <p v-if="data.description">
                            {{data.description}}
                        </p>

                        <button1 v-if="data.button" type="inverse" size="small">
                            {{data.button}}
                        </button1>

                    </div>
                </section>
            </div>
        </nuxt-link>
    </div>
</template>

<script>
    import mixin from '@/mixins/conponent-mixin'

    export default {
        mixins: [mixin],


        props: {
            height: Number,
            placement: {type: String, default: ""}
        },

    }
</script>

<style lang="less" module>
    .pictext5 {
        word-wrap: break-word;
        overflow: hidden;
        position: relative;
        display: inline-block;

        section {
            text-transform: uppercase;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            padding: 0 10px;
            z-index: 1;
            background: rgba(0, 0, 0, .5);
            transition: all 0.2s;

            &.left {
                width: 40%;
                left: 0;
                top: 0;
                bottom: 0;
            }

            &.right {
                width: 40%;
                right: 0;
                top: 0;
                bottom: 0;
            }

            &.bottom {
                height: 40%;
                left: 0;
                right: 0;
                bottom: 0;
                text-align: center;
            }

            &.cover {
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                width: 100%;
                height: 100%;
                text-align: center;
            }

            h3 {
                font-size: 30px;
            }

        }

        img {
            object-fit: cover;
            width: 100%;
            transition: all 0.2s;
        }

        &:hover {
            section {
                background: rgba(0, 0, 0, 0.8);
            }

            img {
                transform: scale(1.2, 1.2);
            }
        }

    }


</style>
