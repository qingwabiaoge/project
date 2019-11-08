<template>

    <div :class="$style.punchy" :style="{'--primary-color':primary}">
        <style>
            :root {
            //记得末尾带; --hero-image: url('{{ heroImage }}');
            }
        </style>

        <h1>Pow.</h1>
        <button @click="setPrimary('red')">red</button>
    </div>

</template>
<script>
    import img from '@/assets/images/test/image1.jpg'
    import mixin from '@/mixins/page-mixin'

    export default {
        layout: 'demo',
        data() {
            return {
                heroImage: img,
            }
        },

        mixins: [mixin]

    }

</script>
<style module lang="less">
    @primary: var(--primary-color); //主色调
    .punchy {
        background-image: var(--hero-image);
        background-size: cover;
        border: 4px solid var(--primary-color);
        display: inline-block;
        color: var(--primary-color);
        width: 250px;
        height: 250px;

        h1 {
            color: @primary;
        }
    }


</style>