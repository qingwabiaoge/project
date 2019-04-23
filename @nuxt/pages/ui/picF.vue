<template>

  <el-row>

    <el-col :md="6">
      <picF :data="$store.state.test[0]">

      </picF>
    </el-col>

    <el-col :md="6">
      <picF :data="$store.state.test[0]" placement="top">


      </picF>
    </el-col>


  </el-row>
</template>
