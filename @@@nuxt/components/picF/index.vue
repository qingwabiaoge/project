<template>
  <!--最外层留给mixin设置背景-->
  <div>
    <div :class="$style.picF">
      <style>
        :root {
        //记得末尾带; --bg: url('{{ data.image }}');
        }
      </style>
      <h2>
        <span class="color-primary">{{data.title}}</span><span>{{data.subtitle}}</span>
      </h2>
      <h3 class="text-uppercase">{{data.info}}</h3>
      <h4>
        {{data.description}}
      </h4>

      <button1>{{data.button}}</button1>

    </div>
  </div>

</template>

<script>
import mixin from '@/mixins/conponent-mixin'

export default {
  mixins: [mixin],

}
</script>
<style lang="less" module>
  .picF {

    padding: 50px 30px;
    background-image: var(--bg);

    & > div {
      padding: 50px 30px;

      background-size: cover;

      button {
        margin-top: 30px
      }

    }


  }


</style>
