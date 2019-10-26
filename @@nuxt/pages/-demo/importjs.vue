<template>
  <div>
    {{i}}
  </div>
</template>

<script>
  console.log('组件内引入js代码')
  const i = 1
  export default {
    layout: 'demo',
    data() {
      return {i}
    }
  }

</script>
