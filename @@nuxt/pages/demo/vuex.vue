<template>
  <div>
    {{obj}}
  </div>
</template>
<script>
  import Vuex from 'vuex'

  const {mapState, mapActions, mapMutations, mapGetters} = Vuex
  export default {
    layout:'demo',
    computed: {
      ...mapState({obj:['test[0]']})
    },
  }
</script>
