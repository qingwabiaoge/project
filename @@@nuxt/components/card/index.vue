<template>
    <div :class="[$style['card'],type?$style['color-'+type]+' color-'+type:'']">
        <section :class="border?$style['border']:''">
            <slot></slot>
        </section>
    </div>

</template>

<script>

    export default {

        props: {
            type: String,
            border: String
        }

    }

</script>

<style module lang="less">
    .card {
        background: #fff;
        padding: 15px;

        &.color-inverse {
            background: #222;
            * { //colort-invese *相当于一个标签h2的权限
                color: white;
            }
        }

        section {
            padding: 15px;

            &.border {
                border: 1px solid #999;
            }
        }

    }

</style>
