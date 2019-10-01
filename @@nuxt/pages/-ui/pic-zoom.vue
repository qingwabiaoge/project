<template>
  <div>

    <img style="width: 200px"
         src="http://img.hb.aicdn.com/ee9c62e8caf1b7907072b90b8058b87b2b92b237102ea-4LB0wq_sq320"
         data-src="http://img.hb.aicdn.com/ee9c62e8caf1b7907072b90b8058b87b2b92b237102ea-4LB0wq_sq320"
         @click="isShow=true;imgZoomUrl=$event.currentTarget.dataset.src">

    <transparentLay v-model="isShow"
                    type="black">
      <div class="inline padding-small">
        <i class="iconfont icon-guanbi position-top-right inverse-wrap"></i>
        <img :src="imgZoomUrl">
      </div>
    </transparentLay>

  </div>
</template>

<script>
  export default {  
    layout:'ui',
    data() {
      return {
        imgZoomUrl: '',
        isShow: false
      }
    }
  }
</script>
