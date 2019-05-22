<template>
    <div>

        <div class="uk-position-fixed uk-background-black ">
            <router-link v-for="item in routes"
                         :to="{ path:item.path}"
                         class="color-white">
                {{item.name}}
            </router-link>
        </div>
        <div style="padding-top: 100px">

            <router-view/>
        </div>

    </div>

</template>
<script>
    export default {
        data() {
            return {
                routes: this.$router.options.routes
            }
        },
        mounted() {
            this.$store.dispatch('nuxtServerInit')

        }

    }
</script>
<style>


</style>
