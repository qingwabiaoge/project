<template>

<div>
<title-zh-english :data="{title:'oem'}">

</title-zh-english>
<div class="container" v-html="components.oem.content">

</div>
</div>
</template>
<script>
  import mixin from '@/mixins/page-mixin'
  export default {
    asyncData(){
      return{...store.getters['components/components'].oem}
    },
    mixins:[mixin]
  }
</script>
