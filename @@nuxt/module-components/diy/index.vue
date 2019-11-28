<template>
  <div class="container">
    <client-only v-if="token">
      <vue-editor
        id="editor"
        useCustomImageHandler
        @image-added="addImage"
        :class="$style.editor"
        v-model="data.content">
      </vue-editor>
    </client-only>

    <div v-else
         v-html="data.content">
    </div>


  </div>
</template>

<script>
import mixin from '@/mixins/conponent-mixin'

export default {
  mixins: [mixin],
  methods: {

    //编辑器editor--------------------------------------------------------------------

    addImage: function (file, Editor, cursorLocation, resetUploader) {
      // An example of using FormData
      // NOTE: Your key could be different such as:
      // formData.append('file', file)
      var formData = new FormData()
      formData.append('file', file)
      this.$axios.post('/upload', formData).then(({ res }) => {

        let url = res// Get url from response

        Editor.insertEmbed(cursorLocation, 'image', url)
        resetUploader()
      })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}

</script>
<style lang="less" module>


  .editor {
    min-width: 100%;

    * + button {
      margin-top: 0px;
    }

    :global(.ql-container) {
      background: white
    }
  }


</style>
