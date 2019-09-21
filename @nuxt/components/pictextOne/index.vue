<template>
  <div>
    <div :class="$style['pictextOne']">
      <el-row>

        <el-col :md="12" :xs="24">
          <img v-lazy="image" alt="title">

        </el-col>

        <el-col :md="{span:8 ,offset:2}" :xs="{span:24 ,offset:0}">
          <section>
            <h3>{{info}}</h3>
            <h2>
              {{etitle}}
            </h2>
            <div></div>
            <h3 class="hidden-md-and-down">
              {{subtitle}}
            </h3>
            <p>
              {{description|setLength(50)}}...
            </p>
            <nuxt-link :to="href">
              <span></span>
              <base-button>

                {{button}}

              </base-button>
            </nuxt-link>
          </section>

        </el-col>

      </el-row>


    </div>

    <article v-if="this.$route.path!=='/'" v-html="content" class="container">

    </article>
  </div>
</template>

<script>
  export default {

    data() {
      return {
        ...this.$store.state.components.pictextOne
      }
    },

  }
</script>

<style lang="less" module>
  .pictextOne {
    background: #f1f1f1;

    section {
      padding: 70px 0;

      > * {
        text-transform: uppercase;
      }

      h2 {
        font-size: 94px;
        margin-top: 0;
        font-family: Arial;
        font-weight: bolder;
        color: @global-color-primary;
      }

      div {
        margin-top: 10px;
        height: 3px;
        width: 30%;
        background: @global-color-primary;
      }

      h3 {
        font-size: 42px;
      }

      p {
        font-size: 16px;
        line-height: 2;

      }

    }

  }
</style>
