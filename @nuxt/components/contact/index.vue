<template>
  <div>
    <el-row :gutter="25">
      <el-col :md="12">
        <img :src="$store.state.components.contact.image" :alt="$store.state.components.brand.title">
      </el-col>
      <el-col :md="12" style="line-height: 2">
        <h1>{{$store.state.components.brand.etitle}}{{$store.state.components.brand.title}}</h1>
        <hr>
        <i class="iconfont icon-zuoji1 uk-margin-right-small"></i>TEL:{{$store.state.components.contact.tel}} <br>
        <i class="iconfont icon-qq uk-margin-right-small"></i>Q Q:{{$store.state.components.contact.qq}} <br>
        <i class="iconfont icon-coordinates uk-margin-right-small"></i>ADDRESS:{{$store.state.components.contact.address}} <br>
      </el-col>

    </el-row>
    <el-row class="uk-margin-top-small" style="margin-top: 30px">

      <img v-lazy="$store.state.components.contact.map" :alt="$store.state.components.brand.title">


    </el-row>

  </div>
</template>
