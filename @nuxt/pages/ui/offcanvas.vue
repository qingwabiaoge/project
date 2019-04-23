<template>
  <div>

    <button @click="isShow=true"
            style="position:fixed;right:0; font-size: 50px; color: deepskyblue">
      ≡
    </button>
    <!--跟随transparentLay的isShow状态改变-->
    <offcanvas :isOpen="isShow">你好你好</offcanvas>

    <transparentLay type="light-black"
                    v-model="isShow">
    </transparentLay>
  </div>

</template>
<script>
  export default {
    layout:'ui',
    methods: {},
    data() {
      return {
        isShow: false
      }
    }
  }

</script>


