<template>
  <div>
    <div class="background-default" :class="$style.module">
      <el-row
        :gutter="20"
        class=" background-gray-lightest "
      >
        <el-col :md="12" v-for="item in data" :key="item.image">

          <div class="text-left"
               :style="{backgroundImage:`url(${item.image}) `}"
               style="padding: 83px 72px;background: #fff no-repeat right bottom ">
            <div class="h1">
              <span class="color-primary">{{item.title}}</span><span>{{item.subtitle}}</span>
            </div>
            <h3 class="text-uppercase" style="color:#666">{{item.text}}</h3>
            <h4 style="padding: 53px 0 80px">
              {{item.description}}
            </h4>
            <nuxt-link :to="{path:item.href}">
            <base-button>点击查看</base-button>
            </nuxt-link>
          </div>
        </el-col>


      </el-row>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      data: Array
    }
  }
</script>

<style lang="less" module>

  /*media<720*/
  @media (max-width: @global-breakpoint-phone) {
    .module {
      :global(.text-left) {
        background-image: none!important;
      }
    }
  }

</style>
