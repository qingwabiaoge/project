<template>
  <div class="article">
    <el-breadcrumb separator=">" class="border-bottom-small uk-padding-bottom uk-margin-medium-bottom">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>文案</el-breadcrumb-item>
      <el-breadcrumb-item>{{$route.params.category}}</el-breadcrumb-item>
    </el-breadcrumb>

    <!--工具条-->
    <el-row>
      <el-col class="clearfix">
        <el-form :inline="true">

          <el-form-item>
            <el-input v-model="keyword" clearable placeholder="请文章标题搜索"></el-input>
          </el-form-item>

          <el-form-item class="uk-padding-left-sm">
            <el-button type="primary" v-on:click="gets" icon="el-icon-search">查询</el-button>
          </el-form-item>

          <el-form-item class="uk-float-right">
            <el-button type="primary" @click="addButton" icon="el-icon-edit-outline">新增文案</el-button>
          </el-form-item>
        </el-form>
      </el-col>


    </el-row>


    <!--//新闻列表-->
    <el-table :data="articles"
              border
              highlight-current-row
              v-loading="listLoading"
              @selection-change="selsChange">
      <el-table-column
        type="selection"
        width='100'>
      </el-table-column>
      <el-table-column
        prop="picture"
        label="缩略图"
        width="100">

        <template slot-scope="scope">

          <img v-lazy="scope.row.image" alt="" style="width: 50px;height: 50px">
        </template>

      </el-table-column>
      <el-table-column
        prop="title"
        label="标题"

        sortable
      >
      </el-table-column>

      <el-table-column
        prop="subtitle"
        label="副标题"

        sortable
      >
      </el-table-column>


      <el-table-column
        prop="publish"
        label="发布/草稿"
        width="100"
        :filters="
                  [
                    {
                      value: true, //不带引号
                      label: '发布',//select显示文字
                      text: '发布' //筛选器显示文字
                    },
                {
                  value: false,
                    label: '草稿',
                  text: '草稿'
                }]"
        :filter-method="filterHandler"
      >
        <template slot-scope="scope">

          <span v-if="scope.row.publish">已发布</span><span v-else>草稿</span>
        </template>
      </el-table-column>
      <el-table-column label="操作"
                       width="150"
                       fixed="right"
      >
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="editButton(scope.$index, scope.row)">编辑
          </el-button>
          <el-button
            size="mini"
            type="danger"
            @click="delButton(scope.$index, scope.row)">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>


    <!--工具条-->
    <el-col :span="24" class="toolbar uk-margin-top">
      <el-button type="danger" @click="batchRemoveButton" :disabled="this.sels.length===0">批量删除</el-button>
      <el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="50" :total="total"
                     style="float:right;">
      </el-pagination>
    </el-col>
    <uniform ref="uniform" :data="uniformData" @submit='submit'></uniform>

  </div>
</template>

<script>


  export default {

    data: function () {
      return {
        //新闻表格数据----------------------------------
        articles: [],
        //加载状态动画--------------------------
        listLoading: false,
        //搜索框数据
        keyword: '',
        //要显示的第几页和每页的数量
        total: 0,
        page: 1,
        //table过滤器--------------------------------
        sels: [],
        uniformData: {},

      }
    },


    methods: {
      //获得新闻列表-----------------------------------------------------
      async gets() {
        const params = {
          page: this.page,
          title: this.keyword,
          category: this.$route.params.category,
          admin: true
        };
        this.listLoading = true;
        const {total, articles} = await this.$axios.get('/articles', {params})
        this.total = total;
        this.articles = articles
        this.listLoading = false

      },
//通用表格过滤器------------------------------------------------------------

      filterHandler(value, row, column) {


        const property = column['property'];

        return row[property] === value;

      },
//


      //显示新增界面并传递属性--------------------------------------------------------------
      addButton: function () {
        this.uniformData = {
          type: 'article',
          image: '',//验证upload ruler需要不可删除
          category: this.$route.params.id - 0,
          publish: true,
          pv: this.$store.state.tool.randomNum(1500, 20000),
        };
        this.$refs.uniform.visible = true
      },


      //显示编辑界面--------------------------------------------------------------------------------------
      editButton: async function (index, row) {//index行号 ，row内容
        const {article} = await this.$axios.get(`/article/${row._id}`)
        this.uniformData = article
        this.$refs.uniform.visible = true
      },

      //删除----------------------------------------------------------------------
      delButton: async function (index, row) {
        await this.$confirm('确认删除该记录吗?', '提示', {
          type: 'warning'
        })
        await this.$axios.delete(`/article/${row._id}`)
        this.gets();
      },
      //批量删除-------------------------------------------------------------------------------
      batchRemoveButton: function () {
        const ids = this.sels.map(item => item._id)

        this.$confirm('确认删除选中记录吗？', '提示', {
          type: 'warning'
        }).then(_ => {

          this.$axios.delete('/articles', {data: {ids}})
          this.gets()
        })
      },

      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      //页面
      handleCurrentChange(val) {
        this.page = val;
        this.gets();
      },

      //选择发生改变
      selsChange: function (sels) {
        this.sels = sels;
      },

      submit: async function () {

        if (!this.uniformData._id) {// 如果不存在article_id,表示新建
          await this.$axios.post('/article', this.uniformData);
        } else {// 如果是编辑
          await this.$axios.patch('/article', this.uniformData);

        }

        this.gets()
      }
    }
    ,
    watch: {
      // 方法1
      '$route'(to, from) { //监听路由是否变化
        if (this.$route.params.category) {// 判断条件1  判断传递值的变化

          this.gets()

        }
      }
    },

    created() {
      this.gets()
    }

  }
</script>

<style>
  .el-table .cell {
    text-align: center
  }
</style>
