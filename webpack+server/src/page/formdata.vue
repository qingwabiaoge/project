<template>
  <div>
    <input id="fileinput"
           type="file"
           accept="image/*"
           @change="upload($event)">

    <img :src="src" alt="">
    <button>提交</button>
  </div>
</template>


<script>

  export default {

    data() {

      return {
        src: ''
      }
    },
    methods: {

      upload(event) {
        const file = event.target.files[0];//获取文件

        // <<图片预览本地文件------------------------------------------
        const windowURL = window.URL || window.webkitURL;//兼容ie和谷歌写法

        console.log(file)

        this.src = windowURL.createObjectURL(file);

        // 图片预览本地文件------------------------------------------>>

        let formdata = new FormData();
        formdata.append('file', file);


        let config = {

          headers: {

            headers: {'Content-Type': 'multipart/form-data;charset=UTF-8'} //之前说的以表单传数据的格式来传递fromdata

          }

        };


        //因为需要koa-body所以需要一个新路由
        this.$axios.post('/formdata', formdata, config).then((res) => {

          //做处理

        }).catch((error) => {


        });
      }

    }

  }


</script>
