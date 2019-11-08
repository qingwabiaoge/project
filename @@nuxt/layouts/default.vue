<template>
    <div :style="{background:`url(${global.background})`,backgroundAttachment: 'fixed','--primary-color':primary} ">

        <header2 :data="{title:global.title,image:global.image,children:categorys}"></header2>
        <!--    <bannerCategory></bannerCategory>-->

        <nuxt/>

        <footerMessage :data="{...components.contact,beian:global.beian}"></footerMessage>
    </div>
</template>
<script>
    import mixin from '@/mixins/page-mixin'

    export default {
        mixins: [mixin]
    }
</script>



