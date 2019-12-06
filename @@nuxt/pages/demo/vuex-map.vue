<template>
  <div>
   <h1>test: {{test}}</h1>
<h2>cs: {{cs}}</h2>
<h3>msg:{{msg}}</h3>
  </div>
</template>
<script>
  import Vuex from 'vuex'

  const {mapState, mapActions, mapMutations, mapGetters} = Vuex
  export default {
    layout:'demo',
    data(){
      return{
        //data函数早于computed所以不可以用map的数据
        msg:this.test
      }
    },
    computed: {
      ...mapState(['test']),
      ...mapState({cs:['test']})
    },
  }
</script>
