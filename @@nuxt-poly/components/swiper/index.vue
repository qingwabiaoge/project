<template>
  <!--You can find this swiper instance object in current component by the "mySwiper"  -->
  <div v-swiper:mySwiper="swiperOption" >
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in $store.state.test">

        <nuxt-link :to="{path:item.href||'#'}">
          <img :data-src="item.image" class="swiper-lazy">
          <div class="swiper-lazy-preloader"></div>
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
    mixins:[mixin],
    props: {
      num: {default: 'auto'},
      gutter:{default:30,type:Number }
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
          }
        }
      }
    },
    mounted() {
      console.log('app init', this)

    },

  }
</script>

