<template>
  <div class="message">
    <el-breadcrumb separator=">" style="margin-bottom: 20px">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>留言</el-breadcrumb-item>

    </el-breadcrumb>


    <!--//新闻列表-->
    <el-table :data="messages"
              border
              highlight-current-row
              v-loading="listLoading"
              @selection-change="selsChange">
      <el-table-column
        type="selection"
        width='100'>
      </el-table-column>

      <el-table-column
        prop="name"
        label="姓名"

        sortable
      >
      </el-table-column>

      <el-table-column
        prop="tel"
        label="电话"

        sortable
      >
      </el-table-column>


      <el-table-column
        prop="content"
        label="留言内容"

        sortable
      >
      </el-table-column>

      <el-table-column
        prop="_id"
        label="日期"
        sortable

      >

        <template slot-scope="scope">

          {{scope.row._id|id2time}}
        </template>
      </el-table-column>

      <el-table-column label="操作"
                       width="150"
                       fixed="right"
      >
        <template slot-scope="scope">

          <el-button
            size="mini"
            type="danger"
            @click="handleDel(scope.$index, scope.row)">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>


    <!--工具条-->
    <el-row style="margin-top: 20px">
    <el-col :span="24" >
      <el-button type="danger" @click="batchRemove" :disabled="this.sels.length===0">批量删除</el-button>
      <el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="50" :total="total"
                     style="float:right;">
      </el-pagination>
    </el-col>
    </el-row>

  </div>
</template>


<script>

  import mixin from '@/mixins/admin-page-mixin'

  export default {
    layout:'admin',
    data: function () {
      return {
        //新闻表格数据----------------------------------
        messages: [],
        //加载状态动画--------------------------
        listLoading: false,
        //搜索框数据
        keyword: '',
        //要显示的第几页和每页的数量
        total: 0,
        page: 1,
        //table过滤器--------------------------------
        //选中的
        sels: [],


      }
    },


    methods: {
      //获得新闻列表-----------------------------------------------------
      async getMessages() {
        this.listLoading = true;
        const {total, messages} = await this.$axios.get('/messages')
        this.total = total;
        this.messages = messages
        this.listLoading = false

      },
//通用表格过滤器------------------------------------------------------------

      filterHandler(value, row, column) {


        const property = column['property'];

        return row[property] === value;

      },

      //删除----------------------------------------------------------------------
      handleDel: async function (index, row) {
        await  this.$confirm('确认删除该记录吗?', '提示', {
          type: 'warning'
        })
        await this.$axios.delete(`/message/${row._id}`)
        this.listLoading = false;
        this.getMessages();
      },
      //批量删除-------------------------------------------------------------------------------
      batchRemove: async function () {

        await this.$confirm('确认删除选中记录吗？', '提示', {
          type: 'warning'
        });
        this.listLoading = true;
        const ids = this.sels.map(item => item._id);

        await this.$axios.delete('/messages', {data:{ids}});
        this.listLoading = false;
        this.getMessages();
      },

      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      //页面
      handleCurrentChange(val) {
        this.page = val;
        this.getMessages();
      },

      //选择发生改变
      selsChange: function (sels) {
        this.sels = sels;
      },

    }
    ,


    created() {
      this.getMessages()
      console.log(this)
    },
    mixins:[mixin]

  }
</script>

<style>
  .el-table .cell {
    text-align: center
  }
</style>
