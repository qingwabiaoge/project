<template>

<div>
<title-zh-english :data="{title:'oem'}">

</title-zh-english>
<div class="container" v-html="components.oem.content">

</div>
</div>
</template>
<script>
  import mixin from '@/plugins/page-mixin'
  export default {
    mixins:[mixin]
  }
</script>
