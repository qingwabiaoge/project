<template>
  <el-row class=" inverse background-gray-dark">
    <el-col :md="12">
      <baseSlider :sliderData="left"
                  :number="1"
                  animate='fade'
                  :stopTime="3000"
                  :transitionTime="0"
                  :pagination="'dot'"
                  :paginationIndex="true"
                  :navigation="true"
                  :height="300"
                  paginationIndexBottom="80"
      >
      </baseSlider>

    </el-col>
    <el-col :md="12">
      <div  style="padding:10%; padding-top: 90px">
        <h2 style=" color: white;
            text-shadow: 2px 5px 0 #555;">
          {{right.title}}
        </h2>

        <p
           class=" line-height-2"
          style=" white-space: pre-line;" >
          {{right.description|setLength(descriptionLength)}}
        </p>
        <nuxt-link :to="{path:right.href||`/component/pictextSlider`}">
          <base-button v-if="showButton" style="margin-top: 20px">
            {{right.button}}
          </base-button>
        </nuxt-link>
      </div>
    </el-col>

  </el-row>
</template>

<script>
  export default {

    props: {
      data: {
        type: Array,
        default: null
      },
      showButton: {
        type: Boolean,
        default: true
      },
      descriptionLength: {//if{显示text} else{ 显示description}
        type: Number,
        default: 100
      }
    },
    computed: {

      left() {
        return this.data.slice(1, this.data.length)
      },
      right() {
        return this.data[0]
      }
    }

  }

</script>


