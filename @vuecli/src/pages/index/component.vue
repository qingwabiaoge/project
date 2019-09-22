<template>

  <div>
    <el-breadcrumb separator=">" class="border-bottom-small uk-padding-bottom uk-margin-medium-bottom">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>组件</el-breadcrumb-item>
    </el-breadcrumb>
    <!---------------------------------------导航--------------------------------------->

    <el-tree
      :data="treeData"
      show-checkbox
      node-key="id"
      default-expand-all
      @node-drop="drop"
      draggable
      :expand-on-click-node="false">
      <span class="custom-tree-node" slot-scope="{ node, data }">
              <el-tooltip class="item" effect="dark" content="栏目是组件的一种,栏目级组件带有页面,可通过导航访问栏目页面" placement="top-start">

        <span v-if="data.isCategory" style="color: #0bb20c">[栏目]</span>    </el-tooltip><span
        @click="edit(node, data)">{{ data.title}}</span>

        <span>

          <el-button
            type="text"
            size="mini"
            @click="() => add(data)">
            <i class="el-icon-plus"></i>
          </el-button>

          <el-button
            type="text"
            size="mini"
            @click="() => remove(node, data)">
         <i class="el-icon-delete"></i>
          </el-button>
        </span>
      </span>
    </el-tree>
    <div>
      <el-button type="text" @click="add()" icon="el-icon-edit-outline">新增顶级组件</el-button>
    </div>
    <uniform ref="uniform" :data="uniformData" @submit="submit"></uniform>
  </div>

</template>
<script>

  export default {
    data() {
      return {
        treeData: Object.assign([], this.$store.state.components),
        id: this.$store.getters['components/maxId'],
        uniformData: {},
      }
    },
    methods: {
      //网络操作-----------------------------
      put() {
        this.$store.dispatch('components/put', this.treeData)
      },


      add(data) {
        const newComponent = {
          title: 'new',
          id: this.id++,
          type: 'component',
          image: '',//验证upload ruler需要不可删除
          publish: true,
          isCategory: false,
        }
        if (data) {
          if (!data.children) {
            this.$set(data, 'children', []);
          }
          data.children.push(newComponent);
        } else { //添加顶级
          this.treeData.push(newComponent)
        }
        this.put()
      },


      edit(node, data) {
        this.uniformData = data
        this.$refs.uniform.visible = true
      },


      submit() {
        this.put()
      },


      drop() {
        this.put()
      },


      remove(node, data) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
        //点了确定按钮
          .then(() => {
            const parent = node.parent;
            const children = parent.data.children || parent.data;
            const index = children.findIndex(d => d.id === data.id);
            children.splice(index, 1);
            this.put()
          })
          //点了取消按钮
          .catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });
          });
      },

    }
  }

</script>
