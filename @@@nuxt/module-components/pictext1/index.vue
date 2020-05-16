<template>
  <!--    v-if不能放到最外层目录会和mixin里的this.$style冲突-->

  <div :class="$style['pictext']">

    <el-row>

      <el-col :md="12" :xs="24">
        <div>
          <img-model :data="data"  ref="img">
          </img-model>
        </div>
      </el-col>
      <el-col :md="{span:8 ,offset:1}" :xs="{span:24 ,offset:0}">
        <section ref="section" :style="{'--img-height':imgHeight+'px'}">
          <h3 :contenteditable="!!token">{{data.subtitle}}</h3>
          <h2 :contenteditable="!!token">
            {{data.title}}
          </h2>


          <h3 class="hidden-md-and-down">
            {{data.info}}
          </h3>
          <p>
            {{data.description|setLength(50)}}...
          </p>
          <nuxt-link :to="data.href">

            <button1>

              {{data.button}}

            </button1>
          </nuxt-link>
        </section>

      </el-col>

    </el-row>


  </div>


</template>

<script>
import mixin from '@/mixins/conponent-mixin'

export default {
  mixins: [mixin],
  data () {
    return {
      imgHeight: 500
    }
  },
  mounted () {

    const el = this.$refs.img
    el.onload = () => {
      this.imgHeight = this.$refs.img.offsetHeight
    }

  }
}
</script>

<style lang="less" module>
  .pictext {


    img {

      object-fit: cover
    }

    section {
      height: var(--img-height);
      display: flex;
      flex-direction: column;
      justify-content: center;


      > * {
        text-transform: uppercase;
      }

      h2 {
        font-size: 94px;
        margin-top: 10px;
        font-family: Arial;
        font-weight: bolder;
        color: @global-color-primary;
      }


      h3 {
        font-size: 42px;
      }

      p {
        font-size: 16px;
        line-height: 2;
        padding-bottom: 30px;

      }

    }

  }
</style>
