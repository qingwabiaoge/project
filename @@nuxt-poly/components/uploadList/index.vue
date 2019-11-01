<template>
  <div>
    <el-upload
      :limit="limit"
      action=""
      list-type="picture-card"
      :before-upload="beforeAvatarUpload"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
      :fileList='images'
      :http-request="upload"
      ref="upload"
    >
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>

  </div>

</template>

<script>


  export default {
    data() {
      return {
        //上传框显示
        dialogVisible: false,
        //预览
        dialogImageUrl: '',


      }
    },
    props: ['images', 'limit'],
    methods: {
      //el-upload
      //上传前的钩子
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 0.5;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 500k!');
        }
        return isJPG && isLt2M;
      },
      //替代element的默认上传
      upload(item) {

        let formData = new FormData()
        formData.append('file', item.file)

        this.$axios.post('/upload', formData, {
          headers: {'Content-Type': 'multipart/form-data'}
        }).then(({res}) => {
          this.images.push({response: res, url: res})
          this.$emit('update:images', this.images)
        })
      },
      //删除图片----
      handleRemove(file, images) {
        //拿到要删除图片对象的uid

        const uid = file.uid
        //由uid查找要删除图片对象的index
        const index = this.images.findIndex(function (item, index, arr) {
          return item.uid == uid
        });
        //删除
        this.images.splice(index, 1)


      },

      handlePictureCardPreview(file) {
        //预览图片
        this.dialogImageUrl = file.url;
        //预览框
        this.dialogVisible = true;
      },

    }
  }
</script>

<style lang="less" scoped>

</style>
