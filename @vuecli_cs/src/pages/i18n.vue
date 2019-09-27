<template>
  <div class="i18n">

    <div>
      来自全局: {{ $t('hello') }}
    </div>

    <div>来自组件:{{ $t("helloworld") }}</div>
  </div>
</template>

<i18n>
  {
  "en": {
  "helloworld": "hello world!"
  },
  "ja": {
  "helloworld": "こんにちは、世界！"
  },
  "zh": {
  "helloworld": "你好，世界!"
  }
  }
</i18n>

<script>
  export default {

    created() {
      console.log(this)
    }
  }


</script>
<style></style>
