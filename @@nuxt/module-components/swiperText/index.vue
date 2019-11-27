<template>
    <!--You can find this swiper instance object in current component by the "mySwiper"  -->
    <div v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper" :class="$style.swiper">
            <div class="swiper-slide" v-for="item in data.children"
                 :style="{backgroundImage:`url(${item.image})`}">

                <nuxt-link :to="{path:item.href||'#'}">
                    {{item.title}}
                </nuxt-link>


            </div>
        </div>
        <div class="swiper-pagination swiper-pagination-bullets"></div>
        <div class="swiper-button-prev swiper-button-inverse"></div>
        <div class="swiper-button-next swiper-button-inverse"></div>
    </div>
</template>

<script>
    import mixin from '@/mixins/conponent-mixin'

    export default {
        mixins: [mixin],
        props: {
            num: {default: 'auto'},
            gutter: {default: 30, type: Number}
        },
        data() {
            return {

                swiperOption: {
                    watchSlidesVisibility: true,
                    slidesPerView: this.num,
                    autoplay: true,
                    delay: 1000,
                    loop: true,

                    centeredSlides: true,
                    spaceBetween: this.gutter,
                    lazy: true,
                    pagination: {
                        el: '.swiper-pagination',
                        dynamicBullets: true,
                        clickable: true
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },
                    on: {
                        slideChange() {
                            console.log('onSlideChangeEnd', this);
                        },
                        tap() {
                            console.log('onTap', this);
                        }
                    },
                    breakpoints: {
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 40
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10
                        }
                    }
                }
            }
        },
        mounted() {
            console.log('app init', this)

        },

    }
</script>
<style lang="less" module>

    .swiper {

        :global(.swiper-slide) {
            height: 300px;
            background-size: cover;
            background-position: center center;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;

            a {
                color: white;
            }

            font-size: 30px;
        }

    }

</style>
