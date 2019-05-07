<template>
    <article class="uk-background-default uk-padding">
        <h1 class="uk-text-center uk-margin-top">{{data.title}}</h1>

        <blockquote >
            {{data.description}}
        </blockquote>
        <div v-if="data.image" class="uk-text-center">
            <img v-lazy="data.image" alt="">
        </div>
        <div v-html="data.content">

        </div>

    </article>

</template>

<script>
    export default {

        props: {
            data:Object

        }

    }

</script>
