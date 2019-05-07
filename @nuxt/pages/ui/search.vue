<template>
<div>
  <search @search="fn"></search>

</div>
</template>

<script>

  export default {   layout: 'ui',

  fn(data){console.log(data)}
  }
</script>
