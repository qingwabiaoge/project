<template>
    <div :class="$style.wrap" :style="{'--primary-color':primary,'--bg-img':`url(${img})`}">
        <a href="#">111</a>
    </div>

</template>

<script>
    import img from '@/assets/images/test/image1.jpg'
    import mixin from '@/mixins/page-mixin'

    export default {
        layout: 'demo',
        data() {
            return {img}
        },
        mixins: [mixin]
    }

</script>
<style lang="postcss" module>
    .wrap {
        background-image: var(--bg-img);


    }
    a {
        color: var(--primary-c