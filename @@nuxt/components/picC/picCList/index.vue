<template>
<div class="container" v-if="data.show"
     style="margin-bottom: 90px">
  <el-row :gutter="5">
    <el-col :md="14">

      <picC :data='data.children[0]'
            placement="left"
            :height="500">

      </picC>

    </el-col>
    <el-col :md="10">
      <picC :data='data.children[1]'
            placement="left"
            :height="500">

      </picC>

    </el-col>
    <el-col :md="14">
      <picC :data='data.children[2]'
            placement="left"
            :height="280">

      </picC>
    </el-col>
    <el-col :md="10">
      <picC :data='data.children[3]'
            placement="left"
            :height="280">

      </picC>
    </el-col>

  </el-row>


</div>
</template>
<script>
  import mixin from '@/mixins/conponent-mixin'
  import mapMixin from '@/mixins/page-mixin'

  export default {
    mixins:[mixin,mapMixin],}
</script>
