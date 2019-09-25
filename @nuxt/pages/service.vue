<template>
  <div >

    <title-zh-english :data="components.service">

    </title-zh-english>
    <!--<div class="text-center">
      <h3 class="hover-underline hover-underline-center  display-inline-block text-uppercase"
          style="font-size: 78px; line-height:1.5;margin-top: 60px; margin-bottom:60px ">
        service
      </h3>
    </div>
-->
   <div class="container" v-html="components.service.content">

   </div>
  </div>
</template>

