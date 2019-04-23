<template>
  <div>
    <div class="text-center">
      <img v-lazy="$store.state.components.pictextFour.categoryImage" :alt="$store.state.global.title">
    </div>

    <div class="container">

      <div style=" margin-bottom: 60px; margin-top: 60px">
        <el-button-group :class="$style['button-group']">

          <el-button plain v-for="item in this.$store.getters.categorys[0].ul">
            <nuxt-link :to="`/produces/${item.title}?page=1`||'#'" :key="item.title">
              {{item.title}}
            </nuxt-link>
          </el-button>

        </el-button-group>
      </div>


      <el-row :gutter="20">
        <el-col v-for="item in goodss" :xs="12" :md="6" :lg="6" :key="item._id">
          <picD :data="item">

          </picD>

        </el-col>

      </el-row>
    </div>
    <div style="text-align: center; margin-top: 70px">

      <!--
      分页组件和后端无关,只改变data里page的状态
      page-size和total决定导航条显示多少页
      :current-page是active显示的按钮
      $route.query.page-0是为了转数字

      -->
      <el-pagination
        @current-change="handleCurrentChange"
        background
        layout="prev, pager, next"

        :page-size="$store.state.global.goodsPagerSize"
        :total="total"
        :current-page.sync="$route.query.page-0"
      >
      </el-pagination>


    </div>
  </div>

</template>
<script>

  export default {
    scrollToTop: false,
    watchQuery: ['page'],
    async asyncData({$axios, route, store}) {

      const {goodss, total} = await $axios.get('/goodss', {
        params: {
          //即可搜索栏目
          category: route.params.category,
          //有可搜索title
          title: route.query.title,
          page: route.query.page,
          size: store.state.global.goodsPagerSize
        }
      })
      return {
        goodss, total
      }
    }
    ,

    methods: {

      async handleCurrentChange(val) {
        this.$router.push(this.$route.path + '?page=' + val)
        // window.location.href = this.$route.path + '?page=' + val;
        /*   console.log(val)
           this.$router.push(this.$route.path + '?page=' + val)
           const {goodss} = await asyncData({$axios: this.$axios, route: this.$route, store: this.$store})
           this.page = val
           this.goodss = goodss*/
      }
    }
  }
</script>


<style lang="less" module>
  .button-group {

    display: flex;
    button {
      flex: 1 1 20rem;
      border-color: #ccc;
    }
  }

</style>
