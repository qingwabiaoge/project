<template>
    <div class="row row-children-padding-remove" v-if="data">
        <div v-for="item in data"
                     class="col-md-3"
                     :class="$style.newslist">

            <div class="uk-position-relative hover-child-image-scale">
                <img v-lazy="item.image" alt="item.title">
            </div>

            <div class="uk-position-relative">
                <img v-lazy="item.image" alt="item.title">
                <section class="uk-flex uk-flex-center uk-flex-middle uk-background-gray-lightest">
                    <div>
                        <h3 class="uk-text-capitalize">{{item.title}}</h3>
                        <h4 class="hover-underline">{{item.subtitle||item.seotitle}}</h4>
                        <p>{{item.discribe}}</p>
                        <!--<span>【查看更多】</span>-->
                    </div>
                </section>
            </div>


        </div>
    </div>
</template>


<script>
    export default {

        props: {
            data: Array
        }

    }
</script>
<style lang="less" module>
    .newslist {

        display: flex;
        flex-direction: column;
        @media (min-width: @breakpoint-xsmall-max) {

            &:nth-of-type(even) {
                flex-direction: column-reverse;
            }
        }

        section {
            position: absolute;
            z-index: 1;
            text-align: center;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            h3 {

                font-weight: bold;
            }
            h4 {
                padding: 12px 0 30px;
                &::after {
                    width: 100%;
                    transform: scale(0.5, 1);
                }
            }
            span {
                padding: 35px 0 62px;
            }
            &:hover {
                h4 {

                    &::after {
                        width: 100%;
                        transform: scale(1, 1)
                    }

                }
            }
        }
    }


</style>
