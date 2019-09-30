<template>

    <div class="background-default   "
         style="margin-bottom: 10px"
    >
        <div class="hover-child-image-scale">
            <img v-lazy="data.image">
        </div>
        <div class="padding-large padding-bottom ">
            <h4>{{data.title}}</h4>
            <p v-if="data.description" class="padding-top-small">{{data.description}}</p>
            <div class="margin-top-small"
                 style="height: 80px; overflow: hidden"
                 v-if="data.color">

                <span style="padding: 2px 5px;"
                      class="background-primary color-inverse ">
                    色彩:</span> {{data.color}}

            </div>
            <baseButton class="margin-top" size="small">点击咨询</baseButton>
        </div>

    </div>


</template>



<script>
  import mixin from '@/plugins/mixins'

export default {
    mixins:[mixin],

  }
</script>
