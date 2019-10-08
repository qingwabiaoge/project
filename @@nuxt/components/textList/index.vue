<template>
  <el-row :gutter="35" type="flex" style="flex-wrap: wrap">
    <el-col :md="12"
            style="background-origin:content-box; background-clip:content-box;"
            class="background-default-transparentest   inverse-wrap  margin-top"
            v-for="item in data"
            :key="item.title"
    >
      <div class=" padding padding-top-small padding-bottom-small  ">
        <div class=" float-left  padding-right " style="line-height: 1.2">

          <i class="iconfont icon-view-grid" style="font-size: 70px"></i>
        </div>
        <div>
          <h3>{{item.title}}</h3>
          <p>
            {{item.description}}
          </p>
        </div>
      </div>

    </el-col>
  </el-row>

</template>

<script>
  import mixin from '@/mixins/conponent-mixin'

export default {
    mixins:[mixin],
    props: {
      data:{type:Array,default:[]}
    }
  }

</script>


