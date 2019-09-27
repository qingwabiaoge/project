<template>
  <div>
    <div :class="$style['component']">
      <section v-for="item in $store.state.components">
        <h4 @click="click(item)">{{item.title}} <b v-if="item.children.length>0" @click.stop="clickB(item._id)">+</b>
        </h4>
        <p v-if="item.children.length>0">
        <span v-for="i in item.children" @click="click(i)">
          {{i.title}} <i @click.stop="clickI(i)">-</i>
        </span>
        </p>
      </section>

    </div>
    <uniform ref="uniform" :data="uniformData" @submit='submitUniform'></uniform>
    <div class="test">
      {{$store.state.components}}
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        fatherId: '',
        uniformData: {}
      }

    },
    methods: {
      click(item) {
        const component = {...item}
        this.uniformData = component
        this.$refs.uniform.visible = true
      },
      clickB(fatherId) {
        this.uniformData = {}
        this.$refs.uniform.visible = true

        this.fatherId = fatherId
      },
      clickI({_id, title}) {
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
          await this.$axios.post('/component', {component: this.uniformData, fatherId: this.fatherId})
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
      margin-top: 30px;
      margin-bottom: 20px;
      background: #f5f5f5;
      padding: 20px;

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
