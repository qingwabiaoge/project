<template>
    <div class="uk-padding-bottom-smaller">
        <ul>
            <li v-for="item in navs">
                <collapseNav_item :item="item">

                </collapseNav_item>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {

        props: {

            navs: {
                type: Array,
                default: []
            },
        }
    }
</script>

