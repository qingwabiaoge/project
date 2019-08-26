##### 本质
本质是把组件标签上的监听移到dom标签

```html
<meta charset="UTF-8">
<script src="https://cdn.bootcss.com/vue/2.5.17-beta.0/vue.js"></script>
<script src="https://cdn.bootcss.com/vuex/3.0.1/vuex.js"></script>
<script src="https://cdn.bootcss.com/vue-router/3.0.1/vue-router.min.js"></script>
<script src="https://cdn.bootcss.com/axios/0.18.0/axios.min.js"></script>

<div id="app">
<!--@input.native会移动到input标签-->
  <base-input v-on:input.native="onInput"></base-input>
</div>

<script>
  const baseInput = {
    template: `
              <label>
              label
                <input
                  v-bind="$attrs"
                  value="value"
                  v-on="listeners"
                >
              </label>
              `,
    computed: {
      listeners() {
        return Object.assign({}, this.$listeners)
      }
    }
  }

  new Vue({
    el: '#app',
    methods: {
      onInput(e) {

        console.log(e)
      }
    },
    components: {
      baseInput
    }

  })

</script>

```
但是不是所有如input的focus就移动不了,用自定义事件解决

```js
<meta charset="UTF-8">
<script src="https://cdn.bootcss.com/vue/2.5.17-beta.0/vue.js"></script>
<script src="https://cdn.bootcss.com/vuex/3.0.1/vuex.js"></script>
<script src="https://cdn.bootcss.com/vue-router/3.0.1/vue-router.min.js"></script>
<script src="https://cdn.bootcss.com/axios/0.18.0/axios.min.js"></script>


<div id="app">

  <base-input v-on:focus="log" @input="log"></base-input>


</div>


<script>

  const baseInput = {
    template: `
              <label>
              label
                <input
                  v-bind="$attrs"
                  value="value"
                  v-on="listeners"
                >
              </label>
              `,
    computed: {
      listeners() {

        return Object.assign({}, this.$listeners,
          {
            // 这里确保组件配合 `v-model` 的工作,如果不用父标签上@input监听到时event
            input: event => {
              this.$emit('input', event.target.value)
            }
          }
        )
      }
    }
  
  }

  new Vue({
    el: '#app',
    methods: {
      log(e) {
        console.log(e)
      }

    },
    components: {
      baseInput
    }

  })


</script>
```
