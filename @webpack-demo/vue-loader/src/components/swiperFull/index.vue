<template>
   <!--You can find this swiper instance object in current component by the "mySwiper"  -->
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in $store.state.componentDatas.sliderFull">

       <nuxt-link :to="{path:item.href||'#'}">
         <img :data-src="item.imgurl"  class="swiper-lazy">
         <div class="swiper-lazy-preloader"></div>
       </nuxt-link>
      </div>
    </div>
    <div class="swiper-pagination swiper-pagination-bullets"></div>
    <div class="swiper-button-prev swiper-button-white"> </div>
    <div class="swiper-button-next swiper-button-white"> </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {

        swiperOption: {
          watchSlidesVisibility : true,
          autoplay:true,
          delay:5000,
          loop: true,
          slidesPerView: 'auto',
          centeredSlides: true,
          spaceBetween: 30,
          lazy: {
            loadPrevNext: true,
          },
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

      console.log(
        'This is current swiper instance object', this.mySwiper,
        'I will slideTo banners 3')
      // this.mySwiper.slideTo(0)
    },

  }
</script>


<style lang="less" scoped>
  .my-swiper {
    /*height: 300px;*/
    width: 100%;
    .swiper-slide {
      text-align: center;
      font-size: 38px;
      font-weight: 700;
      background-color: #eee;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .swiper-pagination {
      > .swiper-pagination-bullet {
        background-color: red;
      }
    }
  }
</style>
