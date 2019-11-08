<template>
    <div :class="$style.wrap" :style="{'--primary-color':primary,}">
        <a href="#">111</a>
        <style>
            :root {
            //记得末尾带; --hero-image: url('{{ heroImage }}');
            }
        </style>
    </div>

</template>

<script>
    import img from '@/assets/images/test/image1.jpg'
    import mixin from '@/mixins/page-mixin'

    export default {
        layout: 'demo',
        data() {
            return {heroImage: img}
        },
        mixins: [mixin]
    }

</script>

<style lang="postcss"  module>
    $primary:var(--primary-color);

    .wrap {

        background:$primary;
        a {
            background-image: var(--hero-image);
            color: var(--primary-color);
            transform: rotate(2deg);
        }
    }


</style>