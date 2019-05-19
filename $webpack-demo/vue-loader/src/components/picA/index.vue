<template>


                <div class="uk-border uk-hover-inverse uk-inline uk-background-default">
                  <nuxt-link :to="{path:`/${$route.params.newsCategory}/${item._id}`}">
                    <img
                            style="margin-top:-50px; padding-right: 20px; "
                            v-lazy="item.imgurl" :alt="item.title"/>

                    <div class="uk-padding">
                        <h3>{{item.title}}</h3>
                        <p class="uk-padding-top uk-padding-bottom-large">{{item.description}}</p>
                        <i>———— Read more</i>

                    </div>
                  </nuxt-link>
                </div>




</template>

<script>
    export default {
        props: {item: Object}
    }
</script>

<style lang="less" module>


</style>
