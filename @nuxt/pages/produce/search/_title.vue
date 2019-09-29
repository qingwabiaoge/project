<template>
  <div class="container" style="padding: 30px 20px; background: #fff">


    <el-row>
      <el-col v-for="item in produces" :md="8" :lg="6" :key="item._id">
        <picD :data="item">

        </picD>

      </el-col>

    </el-row>

    <div style="text-align: center; margin-top: 70px">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total">
      </el-pagination>

    </div>

  </div>

</template>

<script>
  export default {

    async asyncData({$axios, route}) {

      const {produces, total} = await $axios.get('/produces', {
        params: {
          title: route.params.title
        }
      })
      return {
        produces, total
      }
    }
  }
</script>
