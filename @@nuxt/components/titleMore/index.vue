<template>
  <div class="text-center">

    <h2 :class="{'color-gray':!inverse,
                  'color-inverse':inverse}"
    >{{data.subtitle}}</h2>

    <h1 class="color-primary margin-top">{{data.title}}</h1>

    <h3 class="margin-top-smallest text-uppercase"
        :class="{'color-inverse':inverse}"
        style="opacity: 0.4">{{data.info}}</h3>

    <h4 class=" margin-top-large "
        :class="{'color-gray-light':!inverse,
                  'color-inverse':inverse}"
        style="max-width: 550px; margin-left:auto; margin-right:auto"
    >{{data.description}}</h4>

  </div>


</template>

<script>
  import mixin from '@/plugins/conponent-mixin'
export default {
    mixins:[mixin],
    props: {
      data: {},
      inverse:Boolean

    }
  }
</script>
