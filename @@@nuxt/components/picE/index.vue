<template>

    <div :class="$style['picD']" class="color-inverse">

        <section>
            <svg t="1552064836817" class="icon" style="" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg"
                 p-id="3745" xmlns:xlink="http://www.w3.org/1999/xlink">

                <path
                        d="M1004.8 533.333333H21.333333c-10.666667 0-19.2-8.533333-19.2-19.2V512c0-12.8 8.533333-21.333333 19.2-21.333333h983.466667c10.666667 0 19.2 8.533333 19.2 19.2v2.133333c2.133333 12.8-8.533333 21.333333-19.2 21.333333z"
                        p-id="3746"></path>
                <path
                        d="M535.466667 21.333333v981.333334c0 10.666667-8.533333 21.333333-21.333334 21.333333-10.666667 0-21.333333-10.666667-21.333333-21.333333V21.333333c0-10.666667 8.533333-21.333333 21.333333-21.333333 10.666667 0 21.333333 8.533333 21.333334 21.333333z"
                        p-id="3747"></path>
            </svg>
            <h3>{{data.title}}</h3>
        </section>
        <img v-lazy="data.image" :style="{height:height?height+'px':'',width:width?width+'px':''}" alt="data.title"/>
    </div>

</template>

<script>
    import mixin from '@/mixins/conponent-mixin'

    export default {
        mixins: [mixin],
        props: ['height','width']

    }
</script>


<style lang="less" module>
    .picD {
        position: relative;

        img {
            object-fit: cover;
            width: 100%
        }

        section {

            opacity: 0;
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            .background-transparent(@global-color-primary, 0.2);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            transition: all 0.5s;
            transform: translateY(100%);

            svg {
                width: 35%;
                height: 35%;

            }

            h3 {
                font-size: 21px;

            }

        }

        &:hover {
            section {
                opacity: 1;
                transform: translateY(0);


            }
        }
    }

</style>
