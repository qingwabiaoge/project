<template>
    <div>
      <h1>{{title }}</h1>
    </div>
  </template>
  
  <script>
    export default {
      name: 'post',
      data () {
        return {
          title: '标题',
          description: '这是一篇文章...'
        }
      },
      metaInfo () {
        return {
          title: this.title,
          meta: [
            { vmid: 'description', name: 'description', content: this.description }
          ]
        }
      },
      created () {
        this.initData()
      },
      methods: {
        initData () {
          this.$axios.get('/').then((resp) => {
          /*   // 设置title时 metaInfo 会同时更新
            this.title = this.msg
            this.description = this.msg */
          })
        }
      }
    }
  </script>