<template>
  <div style="display: inline-block">
    <div class="search">
      <input type="text" class="input" ref="input" @keyup.enter="$emit('search',$event.target.value)">

      <i class="el-icon-search" @click="$emit('search',$refs.input.value)">
      </i>


    </div>
  </div>
</template>

<script>
  export default {

    // props: {value: String},


  }


</script>

<style scoped lang="less">
  .search {
    display: flex;
    align-items: center;
  }

  input {
    width: 233px;
    height: 34px;
    padding-left: 10px;
    border: 1px solid #333;

    &:focus {
      border: 1px solid @global-color-primary;
      box-shadow: 0px 2px 2px rgba(200, 200, 200, 0.5)
    }
  }

  .i {
    cursor: pointer;
    width: 25px;
    height: 25px;
    margin-left: -40px !important;
  }

</style>
