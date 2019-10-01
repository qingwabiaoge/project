<template>
  <div>
    <div :class="$style['component']">
      <el-breadcrumb separator=">" style="margin-bottom: 20px">
        <el-breadcrumb-item>首页</el-breadcrumb-item>
        <el-breadcrumb-item>组件</el-breadcrumb-item>
      </el-breadcrumb>
      <section v-for="item in $store.state.components.components">
        <h4 @click="clickEdit(item)">{{item.title}} <b v-if="item.children&&item.children.length>0"
                                                       @click.stop="clickAdd(item._id)">+</b>
        </h4>
        <p v-if="item.children&&item.children.length>0">
        <span v-for="i in item.children" @click="clickEdit(i)">
          {{i.title}} <i @click.stop="clickReduce(i)">-</i>
        </span>
        </p>
      </section>

    </div>
    <uniform ref="uniform" :data="uniformData" @submit='submitUniform'></uniform>
    <div v-if="$env">
      {{$store.state.components}}
    </div>
  </div>
</template>

<script>

  export default {
    layout: 'admin',
    data() {
      return {
        parentid: '',
        uniformData: {}
      }

    },
    methods: {
      clickEdit(item) {
        const component = {...item}
        this.uniformData = component
        this.$refs.uniform.visible = true
      },
      clickAdd(parentid) {
        this.uniformData = {model:'component', parentid}
        this.$refs.uniform.visible = true
      },
      clickReduce({_id, title}) {
        this.$confirm(`删除组件 [${title}] , 是否继续?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$axios.delete(`/component/${_id}`).then(_ => {
            this.$message({
                type: 'success',
                message: '删除成功!'
              }
            );

            this.$store.dispatch('components/get')
            this.uniformData = {}
          })

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      async submitUniform() {
        if (this.uniformData._id) {// 如果不存在_id 是新增
          await this.$axios.patch('/component', this.uniformData)
        } else {
          await this.$axios.post('/component', this.uniformData)
        }
        this.$store.dispatch('components/get')
        this.uniformData = {}
      }
    }
    ,
    created() {

    }
  }
</script>

<style module lang="less">
  .component {

    section {
      border-bottom: 1px solid #333;
      padding: 30px;

    span {
        margin-left: 15px;
      }

      b {
        color: #0bb20c;
        margin-left: 5px
      }

      i {
        font-size: 30px;
        margin-left: 5px;
        font-weight: normal;
        color: red;
      }
    }

  }

</style>
