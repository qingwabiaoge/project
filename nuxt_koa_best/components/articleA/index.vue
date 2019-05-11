<template>
    <article class="background-default padding">
        <h1 class="text-center margin-top">{{data.title}}</h1>

        <blockquote >
            {{data.description}}
        </blockquote>
        <div v-if="data.image" class="text-center">
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
