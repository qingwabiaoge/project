<template>

<div>
<title-zh-english :data="components.oem">

</title-zh-english>
<div class="container" v-html="components.oem.content">

</div>
</div>
</template>
<script>
  import mixin from '@/mixins/page-mixin'
  export default {
    asyncData({store }){
      //注入数据到当前组件,类似于prop的作用,为了head使用
      return{...store.getters['components/components'].oem}
    },
    mixins:[mixin]
  }
</script>
