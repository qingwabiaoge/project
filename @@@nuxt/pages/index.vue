<template>
  <div>
    <!--  <componennt v-for="item in components" :is="item.mark" :key="item._id" :data="item">

			</componennt>-->
    <componennt v-for="item of components" :is="item.mark">

      <el-row v-if="item.children" :gutter="20">
        <el-col v-for="ite of item.children" :md="ite.width">
          <componennt :is="ite.mark">

          </componennt>
        </el-col>
      </el-row>
    </componennt>


  </div>

</template>

<script>

export default {

  /*  async asyncData ({ $axios }) {
			const { component } = await $axios.get('/component/5c82740e02c7af23e470bd41')
			console.log(component)
			return { components: [component] }
		}*/

  data () {
    return { components: [{ mark: 'pictext1' }, { mark: 'fullLayout', children: [{ mark: 'picA', width: 8 },{ mark: 'picB', width:8 },{ mark: 'picD', width:8 }] }] }
  }
}

</script>
