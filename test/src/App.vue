<template>

    <div id="app">

        <router-link :to="{name:'del'}">del</router-link>
        <router-link :to="{name:'autor'}">autor</router-link>
        <router-link :to="{name:'xml'}">xml</router-link>
        <router-link :to="{name:'base64'}">base64</router-link>
      <!--这个router-view容易忘记-->
  <router-view></router-view>
    </div>
</template>

<script>    
export default{

}

</script>