<template>
<div>
  必须服务器渲染才可以看到req.headers
{{header}}
</div>

</template>

<script>
  export default {
    layout:'demo',
    asyncData({req}){
      return{header:req.headers}
    }


  }


</script>
