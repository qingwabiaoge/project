<template>
    <div>


    </div>


</template>


<script>
    import img from '../assets/image/1.jpg'


    export default {

        data() {
            return {
                bash64:''
            }
        },

        created() {
            this.$axios.post('/response',{bash64:this.bash64})
        }
    }

</script>