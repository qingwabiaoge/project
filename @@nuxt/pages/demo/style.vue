<template>

    <div :class="$style.punchy" :style="{'--accent-color':color}">
        <style>
            :root {
            //记得末尾带;
                --hero-image: url('{{ heroImage }}');
            }
        </style>

        <h1>Pow.</h1>

    </div>

</template>
<script>
    import img from '@/assets/images/test/image1.jpg'

    export default {
        layout: 'demo',
        data() {
            return {
                heroImage: img,
            }
        },
        computed: {

            color() {
                return this.$store.state.primary
            }
        }
    }

</script>
<style module lang="less">

    .punchy {
        background-image: var(--hero-image);
        background-size: cover;
        border: 4px solid var(--accent-color);
        display: inline-block;
        color: var(--accent-color);
        width: 250px;
        height: 250px;

        h1 {
            color: var(--accent-color);
        }
    }


</style>