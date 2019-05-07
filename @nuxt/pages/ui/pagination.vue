<template>

    <div style="background: #00b3ee">



        <pagination :page-size="15"
                    :total="151"
                    :current="2"
                    :path="$route.path"
                    class="text-center">

        </pagination>





    </div>
</template>

<script>
  export default {   layout: 'ui',}
</script>
<style scoped>

</style>
