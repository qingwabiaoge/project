<template>
    <div>
        <component v-for="(item,index) in componentsData" :is="item.name" :key="item.name+index">

        </component>
    </div>
</template>

<script>

    export default {

        data() {
            return {
                componentsData: [{name: 'picA'}, {name: 'picB'}, {name: 'picC'}, {name: 'elCarouselResponsive'}]
            }
        }

    }
</script>