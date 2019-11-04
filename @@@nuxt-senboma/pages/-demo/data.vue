<template>
  <div>
  <button @click="msg++">
    {{msg}}
  </button>
    {{msg2}}
  </div>
</template>
<script>
  export default {
    layout: 'demo',
    asyncData() {
      return {msg: 0}
    },
    data() {
      return {msg:1,//不能覆盖asyncData
        msg2: 2//可以服务器渲染
      }
    },
    watchQuery: ['id']
  }

</script>
