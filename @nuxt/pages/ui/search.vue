<template>
<div>
  <search @search="fn"></search>

</div>
</template>

<script>

  export default {

  fn(data){console.log(data)}
  }
</script>
