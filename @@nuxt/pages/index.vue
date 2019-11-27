<template>
  <div>
    <componennt v-for="item in components" :is="item.mark" :key="item._id" :data="item">

    </componennt>

  </div>

</template>

<script>

export default {

  async asyncData ({ $axios }) {
    const { component } = await $axios.get('/component/5c82740e02c7af23e470bd41')
    console.log(component)
    return { components: [component] }
  }

}

</script>
