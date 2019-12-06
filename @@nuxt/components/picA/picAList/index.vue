<template>
  <el-row :gutter="30" v-if="data.show">
    <el-col :md="8"
            v-for="(item,index) in data.children"
            :key="'picA'+index">
      <nuxt-link :to="`/article/${item._id}`">
        <picA :data="item" style="margin: 50px 0 30px">
        </picA>
      </nuxt-link>
    </el-col>
  </el-row>

</template>

<script>
  import mixin from '@/mixins/conponent-mixin'

  export default {
    mixins:[mixin],

  }
</script>
