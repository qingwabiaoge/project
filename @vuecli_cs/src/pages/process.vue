<template>
  <div>
    {{p}}
  </div>
</template>

<script>
  export default {
    data(){
      return {p:process.env}
    }
  }
</script>
