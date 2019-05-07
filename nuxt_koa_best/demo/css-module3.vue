<template>

 <span :style="{color:color2}">
{{color1}}
     <br>
     {{color2}}
            </span>


</template>

<script>
    import style from '@/static/less/var.less';

    export default {
        data() {
            return {
                color1: style.global_color,
                color2: style.emphasis_color
        }
        },
        mounted() {
            console.log(this)
        }
    }
</script>

