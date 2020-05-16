<template>
    <div :class="$style['article']">
        <h1>{{data.title}}</h1>

        <blockquote>
            {{data.description}}
        </blockquote>
        <figure>
            <img v-if="data.image" v-lazy="data.image" :alt="data.title">
        </figure>
        <article v-html="data.content">

        </article>

    </div>

</template>
<script>
    import mixin from '@/mixins/conponent-mixin'

    export default {
        mixins: [mixin],
    }
</script>

<style lang="less" module>
    .article {

        background: white;
        padding: 50px 20px;

        h1 {
            text-align: center;
        }

        figure {
            text-align: center;
        }

        article {
            margin-top: 20px;
        }

    }

</style>
