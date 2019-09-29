<template>

  <div class="container" style="padding: 20px; margin-top: 30px;  background: #fff">
    <el-row :gutter="25">
      <el-col :md="12">
        <img :src="components.brand.image" :alt="components.brand.title">
      </el-col>
      <el-col :md="12" style="line-height: 2">

        <h1 style="text-transform: uppercase">{{components.brand.title}}{{components.brand.subtitle}}</h1>
        <hr>
        <i class="el-icon-phone-outline"  style="margin-right:-15px"></i>
        <span v-for="item in components.contact.tel.split('\n')" style="margin-left: 15px">
           {{item}} <br>
        </span>

        <i class="iconfont icon-qq uk-margin-right-small"  style="margin-right:-15px"></i>
        <span style="margin-left: 15px"
              v-for="item in components.contact.qq.split('\n')">
          {{item}} <br>
        </span>

        <i class="el-icon-position" style="margin-right: 5px"></i>ADDRESS:{{components.contact.address}} <br>
      </el-col>

    </el-row>
    <el-row class="uk-margin-top-small" style="margin-top: 30px">

      <div v-html="components.contact.content"></div>
    </el-row>

    <el-row class="uk-margin-top-small" style="margin-top: 30px">

      <img :src="components.contact.map">

    </el-row>

  </div>
</template>

