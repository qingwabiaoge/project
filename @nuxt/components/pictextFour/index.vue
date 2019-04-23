<template>
  <div class="container">

    <el-row :gutter="5">
      <el-col :md="14" style="margin-top: 5px">

        <picC :data="$store.state.components.pictextFour.ul[0]" placement="left">

        </picC>
      </el-col>

      <el-col :md="10"  style="margin-top: 5px">

        <picC :data="$store.state.components.pictextFour.ul[1]" placement="cover">

        </picC>
      </el-col>
    </el-row>

    <el-row :gutter="5">
      <el-col :span="14" style="margin-top: 5px">

        <picC :data="$store.state.components.pictextFour.ul[2]" placement="left">

        </picC>
      </el-col>

      <el-col :span="10"  style="margin-top: 5px">

        <picC :data="$store.state.components.pictextFour.ul[3]" placement="cover">

        </picC>
      </el-col>
    </el-row>




  </div>
</template>


<style module lang="less">
  .pictextFour {
    display: flex;
    justify-content: space-between;

    @media (max-width: 640px) {
      & > * {
        width: 100%
      }

      flex-wrap: wrap;
      margin: 0;
    }
  }

</style>
