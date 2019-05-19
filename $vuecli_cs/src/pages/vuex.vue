<template>
  <div>
    <input type="text" v-model="$store.state.a">
    <button @click="$store.commit('setObj', {a: 2})">setOBj</button>
    {{$store.state}}

  </div>
</template>

<script>

  export default {

    data() {
      return {a: 1}
    }

  }


</script>
