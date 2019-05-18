<template>
  <div>
    <img src="" alt="">
    {{imgurl}}
  </div>

</template>

<script>
  export default {
    computed: {
      imgurl() {
        const categoryName = this.$route.path.split('/')[1]
        console.log(categoryName)
        console.log(this.$store.state.categorys.data)
        const category = this.$store.state.categorys.data.find((item, index, self) =>  item.title === '加盟支持');
        console.log(category)
        return category
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
