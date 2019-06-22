<template>
  <div>

    <button @click="value=!value"
            style="position:fixed;right:0; font-size: 50px; color: deepskyblue">
      ≡
    </button>
    <!--transparentLay和offcanvas公用的value状态-->
    <offcanvas v-model="value">你好你好</offcanvas>

    <transparentLay type="light-black"
                    v-model="value">
    </transparentLay>

  </div>

</template>
<script>
  export default {
    layout: 'ui',
    methods: {},
    data() {
      return {
        value: false
      }
    }
  }

</script>


