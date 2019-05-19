<template>
    <div>
        <!--负责打开transparent-lay,和offcanvas-->
        <button @click="layValue=true
                          offcanvasIsOpen=true"
                style="position:fixed;right:0; font-size: 50px; color: deepskyblue">
            ≡
        </button>

        <offcanvas :isOpen="offcanvasIsOpen">你好你好</offcanvas>
        <!--负责关闭transparent-lay,和offcanvas-->
        <transparent_lay type="light-black"
                         v-model="layValue"
                         @input="offcanvasIsOpen=false">
        </transparent_lay>
    </div>

</template>
<script>
    export default {
        methods: {},
        data() {
            return {
                layValue: false, //transparent-lay
                offcanvasIsOpen: false
            }
        }
    }

</script>


