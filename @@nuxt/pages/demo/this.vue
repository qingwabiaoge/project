<template>
  <div></div>
</template>
<script>
  export default {
    layout: 'demo',
    asyncData() {
      return {msg:'msg'};
    },
    fetch(){

      //服务器端vue组件实例的this,featch和asyncData没先后 所以读不到this.msg
      console.log(this.msg)

    },
    head(){
      // head在feach以后所以可以读取到
      console.log(this.msg)//msg
    }
  }
</script>
