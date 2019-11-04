<template>

  <el-upload
    class="avatar-uploader"
    action=""
    :show-file-list="false"
    :http-request="upload"
    :on-success="handleAvatarSuccess"
    :before-upload="beforeAvatarUpload">
    <i v-if="value" class="el-icon-close" @click.stop="handleRemoveImg"></i>
    <img v-if="value" :src="value" class="avatar">
    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
  </el-upload>


</template>


<script>


  export default {

    props: ['value'],
    methods: {
      //替代element的默认上传
      upload(item) {

        let formData = new FormData()
        formData.append('file', item.file)

        this.$axios.post('/upload', formData, {
          headers: {'Content-Type': 'multipart/form-data'}
        }).then(({res}) => {
          this.$emit('input', res)
        })
      },
      handleAvatarSuccess(res, file) {
        // this.value = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg' || 'image/png';
        const isLt2M = file.size / 1024 / 1024 < 1;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG或者png 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 1MB!');
        }
        return isJPG && isLt2M;
      },
      handleRemoveImg() {
        this.$emit('input', '')
      }
    }
  }
</script>
<style>


  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    /*overflow: hidden;*/
  }

  .avatar-uploader .el-icon-close {
    position: absolute;
    right: -10px;
    top: -10px;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 50px;
    height: 50px;
    line-height: 50px!important;
    text-align: center;
  }

  .avatar {
    min-width: 50px;
    height: 50px;
    display: block;
  }
</style>
