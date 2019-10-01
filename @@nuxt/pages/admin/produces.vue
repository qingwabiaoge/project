<template>
  <div>
    <el-breadcrumb separator=">" style="margin-bottom: 20px">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>产品</el-breadcrumb-item>
    </el-breadcrumb>

    <!--工具条-->
    <el-row>
      <el-col class="clearfix">
        <el-form :inline="true">

          <el-form-item>
            <el-input v-model="searchInputValue"
                      clearable
                      prefix-icon="el-icon-search"
                      placeholder="输入名称搜索产品"
                      class="uk-margin-left"></el-input>
          </el-form-item>
          <el-form-item class="uk-float-right">
            <el-button type="primary" @click="addButton" icon="el-icon-edit-outline">新增商品</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>

    <!--//产品列表-->
    <el-table :data="filterTableData"
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
        label="图片"
      >

        <template slot-scope="scope">

          <img v-lazy="scope.row.image" alt="" style="width: 50px;height: 50px">
        </template>

      </el-table-column>
      <el-table-column
        prop="title"
        label="名称"

        sortable
      >
      </el-table-column>
      <el-table-column
        prop="cid"
        label="类别"
        :filters="categorFilters"
        :filter-method="filterHandler">
        <template slot-scope="{row}">
          {{(produceCategory.filter(item=>item.id===row.cid))[0].title}}

        </template>
      </el-table-column>

      <el-table-column
        prop="color"
        label="颜色"
      >

      </el-table-column>
      <el-table-column
        prop="price"
        label="价格"


        sortable>
      </el-table-column>
      <el-table-column
        prop="number"
        label="数量"


        sortable>
      </el-table-column>

      <el-table-column
        prop="flag"
        label="推荐"

        :filters="[
                  {
                   value: true,

                    text: '推荐'
                  },
                  {
                 value: false,

                 text: '不推荐'
                  }]"
        :filter-method="filterHandler"
      >
        <template slot-scope="scope">

          <span v-if="scope.row.flag">推荐</span><span v-else></span>
        </template>
      </el-table-column>

      <el-table-column
        prop="publish"
        label="上下架"

        :filters="[
                  {
                   value: true,
                   label: '在线',
                    text: '上架'
                  },
                  {
                 value: false,
                 label: '草稿',
                 text: '草稿'
                  }]"
        :filter-method="filterHandler"
      >
        <template slot-scope="scope">

          <span v-if="scope.row.publish"></span><span v-else>草稿</span>
        </template>
      </el-table-column>
      <el-table-column label="操作"
                       fixed="right"
                       width="150">
        <template slot-scope="scope">
          <!--      <el-button
                  size="mini"
                  @click="previewButton(scope.$index, scope.row)">预览
                </el-button>-->
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


    <!-- Form -->

    <!--工具条-->
    <el-row>
      <el-col :span="24" style="margin-top: 20px">
        <el-button type="danger" @click="batchRemoveButton" :disabled="this.sels.length===0">批量删除</el-button>
        <el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="50" :total="total"
                       style="float:right;">
        </el-pagination>
      </el-col>
    </el-row>

    <uniform ref="uniform" :data="uniformData" @submit='submit'></uniform>
    <div v-if="$env">{{filterTableData}}</div>
  </div>
</template>

<script>


  export default {
    layout: 'admin',
    data() {
      return {
        tableData: [],
        uniformData: {},
        listLoading: false,
        searchInputValue: undefined,
        //要显示的第几页和每页的数量
        total: 0,
        page: 1,
        //列表选中项---------------
        sels: [],
        curCid: undefined
        // 按照栏目过滤
      }
    },

    computed: {
      categorFilters() {
        //格式为"[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]
        let filters = []
        this.produceCategory.forEach((item, index, self) => {
          filters.push({text: item.title, value: item.id})
        })
        return filters
      },
      filterTableData: function () {
        const searchInputValue = new RegExp(this.searchInputValue, 'i')
        return this.tableData.filter(item => searchInputValue.test(item.title))
      }

    },

    methods: {

      async gets() {
        const {produces} = await this.$axios.get('/produces?admin=true')
        this.tableData = produces
      },
//通用表格过滤器------------------------------------------------------------

      filterHandler(value, row, column) {


        const property = column['property'];

        return row[property] === value;

      },
//

      //跳转 新增界面--------------------------------------------------------------
      addButton: function () {
        this.uniformData = {
          model: 'produce',
          images: [],//验证upload ruler需要不可删除
          cid: this.curCid,
          publish: true,
          pv: this.$tool.randomNum(1500, 20000),
          sales: this.$tool.randomNum(5, 100),
        };
        this.$refs.uniform.visible = true

      },

//预览按钮
      previewButton() {
      },
      //跳转编辑界面--------------------------------------------------------------------------------------
      editButton: async function (index, row) {//index行号 ，row内容
        const {produce} = await this.$axios.get(`/produce/${row._id}`)
        this.uniformData = produce
        this.$refs.uniform.visible = true
      },

      //删除----------------------------------------------------------------------
      delButton: function (index, row) {

        this.$confirm('确认删除该记录吗?', '提示', {
          type: 'warning'
        }).then(() => {
          this.$axios.delete(`/produce/${row._id}`)
          this.gets()
        })
      },

      //批量删除-------------------------------------------------------------------------------
      batchRemoveButton: function () {
        const ids = this.sels.map(item => item._id)
        this.$confirm('确认删除选中记录吗？', '提示', {
          type: 'warning'
        }).then(_ => {
          this.$axios.delete('/produces', {data: {ids}})
          this.gets()
        })
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      }
      ,
      //页面
      handleCurrentChange(val) {
        this.page = val;
        this.gets()
      }
      ,

      //选择发生改变
      selsChange: function (sels) {
        this.sels = sels;
      }
      ,

      //提交数据按钮
      submit: function (data) {

        if (!this.uniformData._id) {// 如果不存在_id 是新增商品操作
          this.$axios.post('produce', {...this.uniformData, image: this.uniformData.images[0].url}) //计算出首页缩略图地址方便list写法和articl通用
        } else {// 如果是编辑
          this.$axios.patch('produce', {...this.uniformData, image: this.uniformData.images[0].url})
        }
        console.log(data)
        this.curCid = data
        this.gets()
      },


    }
    ,

    mounted() {
      this.gets()
      console.log(this)
    }
  }
</script>

