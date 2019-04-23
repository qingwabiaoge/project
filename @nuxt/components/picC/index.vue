<template>
  <div class="inverse-wrap" :class="$style.picC">
    <!--如果是组件 data.href存在,如果不是组件则是文章-->
    <nuxt-link :to="data.href||$route.path+'/detail/'+data._id||'#'">
      <div>

        <img v-if="data.image" v-lazy="data.image" alt="">
        <section :class="placement?$style[placement]:''">
          <div>
            <h3 v-if="data.etitle">
              {{data.etitle}}
            </h3>
            <p v-if="data.subtitle">
              {{data.subtitle}}
            </p>

            <baseButton v-if="data.button" type="inverse" size="small">
              {{data.button}}
            </baseButton>

          </div>
        </section>
      </div>
    </nuxt-link>
  </div>
</template>

<script>

  export default {


    props: {

      placement: {type: String, default: ""}
    },

  }
</script>

<style lang="less" module>
  .picC {
    overflow: hidden;
    position: relative;
    display: inline-block;

    section {
      text-transform: uppercase;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      padding: 0 10px;
      z-index: 1;
      background: rgba(0, 0, 0, .5);
      &.left {
        width: 40%;
        left: 0;
        top: 0;
        bottom: 0;
      }

      &.right{
        width: 40%;
        right: 0;
        top: 0;
        bottom: 0;
      }

      &.bottom {
        height: 40%;
        left: 0;
        right: 0;
        bottom: 0;
        text-align: center;
      }
      &.cover {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        text-align: center;
      }

      h3 {
        font-size: 30px;
      }

    }

  }

  .picC:hover {
    section {
      background: rgba(0, 0, 0, 0.8);
    }

    img {
      transform: scale(1.2, 1.2);
    }
  }

</style>
