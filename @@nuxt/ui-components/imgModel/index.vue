<template>
       
  <div>
       
      <!--accept定义接收的文件类型,这里只接受图片-->
     <img v-lazy="data.image"
          @click="clickImage"/>
     <input id="fileinput" @change="uploading($event)" type="file" accept="image/*" ref="input" style="display: none">            
  </div>

</template>

<script>

import mixin from '@/mixins/conponent-mixin'

export default {
  mixins: [mixin],

  data () {
    return {
      file: '',
    }
  },

  methods: {
    clickImage () {
      if (this.token) {
        this.$refs.input.dispatchEvent(new MouseEvent('click'))
      }
    },
    async uploading (event) {

      this.file = event.target.files[0]//获取文件
      //本地图片预览------------------------------------
      //兼容ie
      var windowURL = window.URL || window.webkitURL
      this.file = event.target.files[0]
      console.log(this.file)
      //获得src用于预览
      this.data.imgage = windowURL.createObjectURL(event.target.files[0])

      let formdata = new FormData()

      formdata.append('file', this.file)
      console.log(formdata)

      let config = {

        headers: {

          headers: { 'Content-Type': 'multipart/form-data' } //之前说的以表单传数据的格式来传递fromdata

        }

      }

      const { res } = await this.$axios.post('/upload', formdata, config)
      this.data.image = res

      //------------------------------------本地图片预览
    },


  }

}

</script>
