<template>
  <div class="text-center">

    <h2 :class="{'color-gray':type==='default',
                  'color-inverse':type==='inverse'}"
    >{{subtitle}}</h2>

    <h1 class="color-primary margin-top">{{title}}</h1>

    <h3 class="margin-top-smallest text-uppercase"
        :class="{'color-inverse':type==='inverse'}"
        style="opacity: 0.4">{{info}}</h3>

    <h4 class=" margin-top-large "
        :class="{'color-gray-light':type==='default',
                  'color-inverse':type==='inverse'}"
        style="max-width: 550px; margin-left:auto; margin-right:auto"
    >{{description}}</h4>

  </div>


</template>

<script>
  export default {
    props: {
      title: String,
      subtitle: String,
      info: String,
      description: String,
      image: String,//图片单张
      content: String,
      type: String
    }
  }
</script>
