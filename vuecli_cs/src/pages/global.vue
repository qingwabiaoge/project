<template>
  <div>
    {{msg}}
    <button @click="fn">改变</button>

  </div>
</template>

<script>

  export default {
    data() {
      return {msg: myglobal.a}
    },
    methods: {
      fn() {
        myglobal.a = 2
        myglobal.setMyGlobal(4)
        console.log(myglobal)
      }
    }
  }
</script>
