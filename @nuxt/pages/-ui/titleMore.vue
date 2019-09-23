<template>
  <div>
    <titleMore :data="$store.state.test[0]" type="default">

    </titleMore>
    <div style="background: black">

      <titleMore :data="$store.state.test[0]" type="default" inverse="">

      </titleMore>

    </div>

  </div>
</template>

<script>
  export default {layout: 'ui',}

</script>
