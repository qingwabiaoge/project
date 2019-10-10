<template>
  <div class="container" style="padding: 50px 20px; margin-top: 30px;  background: #fff">
    <el-row :gutter="25">
      <el-col :md="12">
        <img :src="data.image" :alt="data.title">
      </el-col>
      <el-col :md="12" style="line-height: 2">

        <h1 style="text-transform: uppercase">{{data.title}} <small>{{data.name}}</small></h1>
        <hr>
        <i class="el-icon-phone-outline" style="margin-right:-15px"></i>
        <span v-for="item in data.tel.split('\n')" style="margin-left: 15px">
           {{item}} <br>
        </span>

        <i class="iconfont icon-qq uk-margin-right-small" style="margin-right:-15px"></i>
        <span style="margin-left: 15px"
              v-for="item in data.qq.split('\n')">
          {{item}} <br>
        </span>

        <i class="el-icon-position" style="margin-right: 5px"></i>ADDRESS:{{data.address}} <br>
      </el-col>

    </el-row>
    <el-row class="uk-margin-top-small" style="margin-top: 30px">

      <div v-html="data.content"></div>
    </el-row>

    <el-row class="uk-margin-top-small" style="margin-top: 30px">

      <img :src="data.map">

    </el-row>

  </div>
</template>
<script>
  import mixin from '@/mixins/conponent-mixin'

  export default {
    mixins: [mixin]
  }
</script>
