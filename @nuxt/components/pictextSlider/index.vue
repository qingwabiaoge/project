<template>
  <el-row class=" inverse-wrap background-gray-dark">
    <el-col :md="12">
      <baseCarousel :sliderData="left"
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
      </baseCarousel>

    </el-col>
    <el-col :md="12">
      <div  style="padding:10%; padding-top: 90px">
        <h2 style=" color: white;
            text-shadow: 2px 5px 0 #555;">
          {{right.title}}
        </h2>
        <p v-if="showText" style="padding: 50px 0; line-height: 2;max-width: 485px; white-space: pre-line; " class="text-large">
          {{right.info}}
        </p>
        <p v-else
           class="margin-top line-height-2"
          style=" white-space: pre-line;" >
          {{right.description}}
        </p>
        <nuxt-link :to="{path:right.href||`/component/pictextSlider`}">
          <base-button v-if="showButton">
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

      showButton: {
        type: Boolean,
        default: true
      },
      showText: {//if{显示text} else{ 显示description}
        type: Boolean,
        default: true
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


