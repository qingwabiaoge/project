<template>

      <transition name="slider-left">
        <div v-if="isOpen"
             class="uk-background-default"
             style="position:fixed;left: 0; top: 0; width: 300px; height: 100%; z-index: 10">
            <slot></slot>
        </div>
      </transition>

</template>
<script>
    export default {
        props: {
            isOpen: {
                type: Boolean,
                default: true
            }
        }

    }

</script>


