<template>
  <div  v-if="isShow">
    <span>{{message}}</span>
  </div>
</template>
<script>
  export default {
    name: 'Message',
    data () {
      return {
      }
    },
    props:{
      message: {
        type: String,
        default: '成功'
      },
      isShow: {
        type: Boolean,
        default: true
      }
    },
    methods:{
      close(){
        this.isShow = false;
      }
    }
  }
</script>
