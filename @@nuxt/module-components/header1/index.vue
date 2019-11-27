<template>
  <div :class="$style.wrap " class="container">
    <nav>
      <div :class="$style.logo">
        <nuxt-link to="/">
          <img :src="global.image" alt="logo">
        </nuxt-link>
      </div>

      <slot>
        <!--存放导航-->
      </slot>

      <i class="el-icon-setting hidden-md-and-up" @click="drawer = true" type="primary"
         style="margin-right: 10px; font-size: 30px"></i>

      <div>
        <el-input
          placeholder="search"
          prefix-icon="el-icon-search"
          v-model.lazy="inputValue">
        </el-input>
      </div>

    </nav>


    <el-drawer
      :visible.sync="drawer"
      :direction="direction">
      <slot name="drawer">
        <!--存放竖形导航-->
      </slot>
    </el-drawer>

  </div>
</template>
<script>
import elNav from '../elNav'
import mixin from '@/mixins/page-mixin'

export default {
  data () {
    return {
      inputValue: '',
      drawer: false,
      direction: 'rtl',
    }
  },
  mixins: [mixin],
  components: { elNav },
  watch: {
    inputValue (value) {
      this.$router.push(`/produce/?title=${value}`)
    }
  }

}
</script>

<style lang="less" module>
  .wrap {

    nav {
      height: 60px;
      background: white;
      display: flex;
      justify-content: space-between;

      div {
        display: flex;
        align-items: center;
      }
    }



  }



</style>


