<template>
  <div>
    <!--    <title-zh-english :data="components.produce"></title-zh-english>-->

    <div class="container">

      <div style=" margin-bottom: 60px; margin-top: 60px">
        <el-button-group :class="$style['button-group']">

          <el-button v-for="item in produceCategory" :key="item.title" plain>
            <nuxt-link :to="item.href">
              {{item.subtitle}}
            </nuxt-link>

          </el-button>

        </el-button-group>
      </div>


      <el-row :gutter="20">
        <el-col v-for="item in produces" :xs="12" :md="6" :lg="6" :key="item._id">
          <nuxt-link :to="`/produce/detail/${item._id}`">
            <picE :data="item" height="300" style="margin-top: 20px">

            </picE>
          </nuxt-link>
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

        :page-size="global.producePagerSize"
        :total="total"
        :current-page.sync="$route.query.page-0"
      >
      </el-pagination>


    </div>
  </div>

</template>
<script>
  import mixin from '@/mixins/map-mixin'
  export default {
    scrollToTop: true,
    watchQuery: ['page','title'],
    async asyncData({$axios, route, store}) {

      const {produces, total} = await $axios.get('/produces', {
        params: {
          //即可搜索栏目
          category: route.params.category,
          //有可搜索title
          title: route.query.title,
          page: route.query.page,
          size: store.state.global.global.producePagerSize,
        }
      })
      return {
        produces, total
      }
    }
    ,

    methods: {

      async handleCurrentChange(val) {
        this.$router.push(this.$route.path + '?page=' + val)
        // window.location.href = this.$route.path + '?page=' + val;
        /*   console.log(val)
           this.$router.push(this.$route.path + '?page=' + val)
           const {produces} = await asyncData({$axios: this.$axios, route: this.$route, store: this.$store})
           this.page = val
           this.produces = produces*/
      }
    },
    mixins:[mixin]
  }
</script>


<style lang="less" module>
  .button-group {

    display: flex;

    button {
      flex: 1 1 20rem;
      border-color: #ccc;
    }

    a {
      display: block;
    }
  }

</style>
