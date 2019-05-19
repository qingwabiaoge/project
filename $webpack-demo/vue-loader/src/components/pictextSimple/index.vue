<template>
    <div class="uk-shadow-small uk-background-default">
        <div class="uk-flex uk-child-width-1-2">
            <div class="hover-child-image-scale">
                <img v-lazy="data[0].imgurl" alt="" style="object-fit: fill; width: auto">
            </div>
            <div class="uk-padding-left-large uk-padding-right-lg article uk-flex uk-flex-middle ">
                <div>
                    <h2>{{data[0].title}}</h2>
                    <h5 class="uk-text-uppercase">{{data[0].subtitle}}</h5>
                    <p class="uk-margin-top-small">{{data[0].text}}</p>

                    <baseButton class="uk-margin-medium-top">
                        <a :href="data[0].href">了解我们</a>
                    </baseButton>
                </div>
            </div>
        </div>

    </div>

</template>

<script>
    export default {
        props: {
            data: {
                type: Array,
                default: [{imgurl: '#'}]
            }
        }
    }
</script>

