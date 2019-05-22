<template>
  <div></div>
</template>

<script>

  console.log('非异步加载组件,import立马运行,类似全局')
  export default {
    created(){
      console.log('非异步加载组件的created运行,route切换时才vue实例化')
    }
  }

</script>
