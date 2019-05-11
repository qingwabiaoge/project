<template>


                <div class="border hover-inverse inline background-default">
                  <nuxt-link :to="{path:$route.fullPath+'/'+item._id}">
                    <img
                            style="margin-top:-50px; padding-right: 20px; "
                            v-lazy="item.image" :alt="item.title"/>

                    <div class="padding">
                        <h3>{{item.title}}</h3>
                        <p class="padding-top padding-bottom-large">{{item.description}}</p>
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
