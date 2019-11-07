<template>
  <div>
    <h1>{{ 'My nice title' | translate }}</h1>
    <p>{{ $t('content', {'type': 'nice'}) }}</p>
  </div>
</template>
<script>
  export default {
    layout:'demo'
  }
</script>