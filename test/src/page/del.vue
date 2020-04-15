<template>

<div>


</div>

</template>


<script>

export default{

created(){

    this.$axios.delete('/response',{data:{id:1}})
}


}

</script>