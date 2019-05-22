<template>
  <div id="app">
    <vue-editor id="editor"
                useCustomImageHandler
                @imageAdded="handleImageAdded"
                v-model="htmlForEditor">
    </vue-editor>
  </div>
</template>

<script>
  import { VueEditor } from 'vue2-editor'
  import axios from 'axios'
  export default {
    components: {
      VueEditor
    },

    data() {
      return {
        htmlForEditor: ''
      }
    },

    methods: {
      handleImageAdded: function(file, Editor, cursorLocation, resetUploader) {
        // An example of using FormData
        // NOTE: Your key could be different such as:
        // formData.append('file', file)

        var formData = new FormData();
        formData.append('file', file)
        let config = {
          headers:{'Content-Type':'multipart/form-data'}
        }; //添加请求头
        axios.post('http://localhost:3000/upfile/',formData,config)
          .then((result) => {
           console.log(result)
            let url = result.data.urlres // Get url from response

            Editor.insertEmbed(cursorLocation, 'image', url);
            resetUploader();
          })
          .catch((err) => {
            console.log(err);
          })
      }
    }
  }
</script>
