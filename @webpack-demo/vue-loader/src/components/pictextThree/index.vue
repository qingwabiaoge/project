<template>
  <div class="container  uk-inverse uk-background-gray-dark">
    <el-row :gutter="28">

      <el-col :md="12" v-if="data">

        <div :class="$style['hover-white-backgoud-fade-in']"
             class="uk-inline hover-child-image-scale "
        >
          <img v-lazy="data[0].imgurl"
               :alt="data[0].title">
          <div class="uk-overlay uk-overlay-default uk-position-bottom ">
            <div>
              <h3> {{data[0].title}}</h3>
              <p>{{data[0].subtitle}}</p>
            </div>
          </div>
        </div>

      </el-col>
      <el-col :md="12">
        <div :class="$style['hover-white-backgoud-fade-in']"
             class="uk-inline uk-background-primary hover-child-image-scale "
        >
          <img v-lazy="data[1].imgurl" alt="data[1].title">
          <div class="uk-position-right uk-overlay uk-overlay-default uk-flex uk-flex-middle"
               style="width: 50%">
            <div>
              <h3 >{{data[1].title}}</h3>
              <p >{{data[1].subtitle}}</p >
            </div>
          </div>
        </div>
        <div :class="$style['hover-white-backgoud-fade-in']"
             class="uk-inline uk-background-secondary hover-child-image-scale"
             style="margin-top:28px">
          <img v-lazy="data[2].imgurl" alt="data[2].title">
          <div class="uk-position-right uk-overlay uk-overlay-default uk-flex uk-flex-middle" style="width: 50%">
            <div>
              <h3>{{data[2].title}}</h3>
              <p>{{data[2].subtitle}}</p>
            </div>
          </div>
        </div>
      </el-col>

    </el-row>
  </div>
</template>

<script>
  export default {
    props: {
      data: {
        type: Array,
        default: null
      }
    }
  }
</script>

<style lang="less" module>

  //背景fade
  .hover-white-backgoud-fade-in {
    & > div {
      background: rgba(0, 0, 0, 0.5);
      transition: all @global-translation;
    }

    &:hover > div {
      background: rgba(0, 0, 0, 0.7);
    }
    .cscs{
      color:red
    }
  }

</style>
