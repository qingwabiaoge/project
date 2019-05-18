<template>
  <div class="shadow-small background-default">
    <div class="flex child-width-1-2">
      <div class="hover-child-image-scale">
        <img v-lazy="data.image" alt="" style="object-fit: fill; width: auto">
      </div>
      <div class="padding-left-large padding-right-lg article flex flex-middle ">
        <div>
          <h2>{{data.title}}</h2>
          <h5 class="text-uppercase">{{data.subtitle}}</h5>
          <p class="margin-top-small">{{data.info}}</p>

          <baseButton class="margin-medium-top">
            <a :href="data.href">了解我们</a>
          </baseButton>
        </div>
      </div>
    </div>

  </div>

</template>

<script>

  export default {

    props: {
      data: {type: Object, default: []}
    }
  }


</script>



