<template>
  <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto;" :style="{height:height+'px' }">

    <li v-for="i in count" class="infinite-list-item">{{ i }}</li>
  </ul>
</template>

<script>
  export default {
    data() {
      return {
        count: 0,
        height: 500
      }
    },
    methods: {
      load() {
        this.count += 2
      }
    },
    mounted() {

      this.height = document.documentElement.clientHeight
    }
  }
</script>
