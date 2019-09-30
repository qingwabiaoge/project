<template>
  <transition name="fade">
    <div
      v-if="value"
      :class="['transparent-lay',
                type? 'background-'+type+'-transparent':'']"
      @click="$emit('input', false)"
    >
      <div class="slot">
        <slot>

        </slot>
      </div>
    </div>
  </transition>
</template>

<script>
  import mixin from '@/plugins/mixins'

export default {
    mixins:[mixin],


    props: {
      type: {
        type: String, //多属性这样写 类型字符串 模板用三目表达式
        default: 'light-black'//primary,black,default
      },
      value: {
        type: Boolean,
        default: false
      }

    }
  }
</script>
<style lang="less" scoped>

  .transparent-lay {
    z-index: 2;
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    .slot {

      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%
    }
  }

</style>
