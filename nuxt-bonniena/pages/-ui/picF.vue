<template>

  <el-row :gutter="20">

    <el-col :md="12">
      <picF :data="$store.state.test[1]">

      </picF>
    </el-col>

  </el-row>
</template>
<script>
  export default {layout: 'ui',}
</script>
