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
      draggable
      :expand-on-click-node="false">
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span v-if="data.isCategory">[栏目]</span><span
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
        treeData: Object.assign([], this.$store.state.oricomponents),
        id: 1000,
        uniformData: {},
      }
    },
    methods: {
      //tree-----------------------------
      add(data) {
        const newComponent = {
          title: 'new',
          id: this.id++,
          type: 'component',
          image: '',//验证upload ruler需要不可删除
          // category:this.$route.params.cid-0,
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
        this.$store.dispatch('components/put', this.treeData)
      },

      edit(node, data) {
        this.uniformData = data
        this.$refs.uniform.visible = true
      },
      submit(){
        this.$store.dispatch('components/put', this.treeData)
      },

      remove(node, data) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(() => {
            const parent = node.parent;
            const children = parent.data.children || parent.data;
            const index = children.findIndex(d => d.id === data.id);
            children.splice(index, 1);
            this.$store.dispatch('components/put', this.treeData)
            this.$message({
              type: 'success',
              message: '删除成功!'
            });

          })
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
