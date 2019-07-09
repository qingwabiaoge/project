<template>

    <div style="background: #00b3ee">



        <pagination :page-size="15"
                    :total="151"
                    :current="2"
                    :path="$route.path"
                    class="uk-text-center">

        </pagination>





    </div>
</template>

<script>
    export default {
        name: "index",
        mounted() {
            console.log(this.$route)
        }
    }
</script>

<style scoped>

</style>
