<template>
  <div>
    <div class="uk-background-default" :class="$style.module">
      <el-row
        :gutter="20"
        class=" uk-background-gray-lightest "
      >
        <el-col :md="12" v-for="item in data">

          <div class="uk-text-left"
               :style="{backgroundImage:`url(${item.imgurl}) `}"
               style="padding: 83px 72px;background: #fff no-repeat right bottom ">
            <div class="uk-h1">
              <span class="color-primary">{{item.title}}</span><span>{{item.subtitle}}</span>
            </div>
            <h3 class="uk-text-uppercase" style="color:#666">{{item.text}}</h3>
            <h4 style="padding: 53px 0 80px">
              {{item.description}}
            </h4>
            <base-button>点击查看</base-button>
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
      :global(.uk-text-left) {
        background-image: none!important;
      }
    }
  }

</style>
