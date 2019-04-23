<template>
  <input v-pagefocus type="text">
</template>

<script>
  import Vue from 'vue'


  //并非局部指令,也不是全局指令,指令写在这里不妥,当前页绑定的元素插入到 DOM 中时……,inserted函数的代码运行,direct3页面才能使用此directive,
  Vue.directive('pagefocus', {
    // 当被绑定的元素插入到 DOM 中时……
    inserted: function (el) {
      // 聚焦元素
      el.focus()
      console.log('page内的directive运行')

    }
  })

  export default {

  }
</script>
