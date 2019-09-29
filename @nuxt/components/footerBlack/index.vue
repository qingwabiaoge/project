<template>
  <div>
    <div class="inverse-wrap
               padding-bottom
               background-gray-darker "
    >
      <el-row class="container">
        <el-col :md="5" class="padding-top-larger
                               hidden@xs">
          <h3>艺术产品</h3>
          <ul style="margin-top: 18px; margin-left: 6px">
            <li v-for="item in $store.state.produceCategory">
              <nuxt-link :to="{path:`/produces/${item.text}`}">
                {{item.text}}
              </nuxt-link>
            </li>
          </ul>
        </el-col>
        <el-col :md="5"
                class="padding-top-larger
                               hidden@xs">
          <h3>百事得新闻</h3>
          <ul style="margin-top: 18px;
                    margin-left: 6px">
            <li v-for="item in $store.state.articleCategory">
              <nuxt-link
                :to="{path:`/article/${item.text}`}">
                {{item.text}}
              </nuxt-link>
            </li>
          </ul>
        </el-col>

        <el-col :md="5" class="padding-top-larger
                               hidden@xs">
          <h3>加入百事得</h3>
          <ul style="margin-top: 18px; margin-left: 6px">
            <li>

              <nuxt-link to="/join">
                加入我们
              </nuxt-link>
            </li>
          </ul>
        </el-col>
        <el-col :md="5" class="padding-top-larger
                               hidden@xs">
          <h3>关于</h3>
          <ul style="margin-top: 18px;
                    margin-left: 6px">

            <li>
              <nuxt-link :to='{path:"/brand"}'>
                关于百事得
              </nuxt-link>
            </li>
            <li>
              <nuxt-link :to="{path:'/contact'}">
                联系我们
              </nuxt-link>
            </li>
          </ul>
        </el-col>


        <el-col :md="4" class="text-right padding-top-larger text-center@xs">
          <img v-lazy="$store.state.global.qcode" style="width: 200px" alt="二维码">
        </el-col>

      </el-row>
    </div>
    <div class="inverse-wrap background-black"
         style=" line-height: 67px; color: #666">
      <el-row class="container text-center@xs">
        <el-col :md="8">
          {{$store.state.components.contact.address}}

        </el-col>
        <el-col :md="8">
          <a href="http://www.miitbeian.gov.cn">
            {{$store.state.global.beian}}
          </a>
        </el-col>
        <el-col :md="8" class="hidden@xs">友情链接:</el-col>
      </el-row>
    </div>
  </div>
</template>
<script>

  export default {
    // async fetch({store, params}) {
    //   await store.dispatch('getArticles', {componentName: "join", category: '代理加盟'});}
  }
</script>
