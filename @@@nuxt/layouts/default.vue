<template>
  <div :style="{background:`url(${global.background})`,backgroundAttachment: 'fixed','--primary-color':primary} ">
    <top></top>
    <header1>
      <el-nav class="hidden-sm-and-down"></el-nav>
      <template v-slot:drawer>
        <el-nav mode="horizontal ">

        </el-nav>
      </template>
    </header1>
    <nuxt/>

    <!-- <footerMessage :data="{...components.contact,beian:global.beian}"></footerMessage>-->
  </div>
</template>
<script>
import mixin from '@/mixins/page-mixin'

export default {
  mixins: [mixin]
}
</script>



