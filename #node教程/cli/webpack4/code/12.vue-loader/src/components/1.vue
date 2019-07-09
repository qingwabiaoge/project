<template>

  <ul>
    <li v-for="(item,index) in list" :key="index">
      <p @click="changeStatus(index)">{{item.name}}</p>
      <tree-menus v-if="scopesDefault[index]" :list="item.cList"></tree-menus>
    </li>
  </ul>

</template>
<style>
  ul {
    margin-top: 50px;
    padding-left: 20px !important;
  }
</style>
<script>

  // import treeMenus from './treeMenu2.vue'
  export default {
    name: 'treeMenus',
    props: {
      list: Array
    },
    data() {
      return {
        scopesDefault: [],
        scopes: []
      }
    },

    methods: {
      changeStatus(index) {
        console.log(index);
        if (this.scopesDefault[index] == true) {
          this.$set(this.scopesDefault, index, false)
        } else {
          this.$set(this.scopesDefault, index, this.scopes[index])
        }
      },
      scope() {
        this.list.forEach((item, index) => {
          this.scopesDefault[index] = false
          if ('cList' in item) {
            this.scopes[index] = true
            console.log(item, index)
          } else {
            this.scopes[index] = false
          }
        })
        console.log(this.scopesDefault)
      }
    },
    created() {
      this.scope()
    }
  }
</script>
