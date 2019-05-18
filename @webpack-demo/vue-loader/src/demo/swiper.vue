
    <template>
        <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
            <!-- slides -->
            <swiper-slide>I'm Slide 1</swiper-slide>
            <swiper-slide>I'm Slide 2</swiper-slide>
            <swiper-slide>I'm Slide 3</swiper-slide>
            <swiper-slide>I'm Slide 4</swiper-slide>
            <swiper-slide>I'm Slide 5</swiper-slide>
            <swiper-slide>I'm Slide 6</swiper-slide>
            <swiper-slide>I'm Slide 7</swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
            <div class="swiper-scrollbar"   slot="scrollbar"></div>
        </swiper>
    </template>

    <script>
        export default {
            name: 'carrousel',
            data() {
                return {
                    swiperOption: {
                        // some swiper options/callbacks
                        // 所有的参数同 swiper 官方 api 参数
                        // ...
                    }
                }
            },
            computed: {
                swiper() {
                    return this.$refs.mySwiper.swiper
                }
            },
            mounted() {
                // current swiper instance
                // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
                console.log('this is current swiper instance object', this.swiper)
                this.swiper.slideTo(3, 1000, false)
            }
        }
    </script>
