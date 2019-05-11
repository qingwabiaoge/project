<template>
<div>
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
