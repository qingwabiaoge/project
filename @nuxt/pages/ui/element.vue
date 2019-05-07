<template>
  <div>

    <el-button-group class="button-group">

      <el-button plain>
        <a href="#" class="active">111</a>
      </el-button>
      <el-button plain>
        测试
      </el-button>
      <el-button plain>
        测试
      </el-button>
    </el-button-group>

    <el-input

      size="large"
      placeholder="请输入内容"
      suffix-icon="el-icon-search"
      v-model="input21">
    </el-input>
  </div>
</template>

<script>
  export default {   layout: 'ui',

    data() {
      return {
        input21: ''
      }
    }


  }

</script>
<style scoped lang="less">
  .button-group {

    display: flex;

    button {
      flex: 1 1 20rem;
      border-color: #ccc;
    }
  }

</style>
