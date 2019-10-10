<template>
  <vue-editor id="editor"
              useCustomImageHandler
              @imageAdded="addImage"
              :class="$style.editor"
              v-model="data">
  </vue-editor>
</template>
<script>
  import {VueEditor} from 'vue2-editor'

  export default {
    components: {VueEditor},
    props: {data: ''},
    methods: {
      //编辑器editor--------------------------------------------------------------------
      addImage: function (file, Editor, cursorLocation, resetUploader) {
        // An example of using FormData
        // NOTE: Your key could be different such as:
        // formData.append('file', file)
        var formData = new FormData();
        formData.append('file', file)
        this.$axios.post('/upload', formData).then(({res}) => {

          let url = res// Get url from response

          Editor.insertEmbed(cursorLocation, 'image', url);
          resetUploader();
        })
          .catch((err) => {
            console.log(err);
          })
      },
    },
  }
</script>
<style module>
  .editor {
    min-width: 100%;

    :global(.ql-container) {
      background: white
    }
  }
</style>
