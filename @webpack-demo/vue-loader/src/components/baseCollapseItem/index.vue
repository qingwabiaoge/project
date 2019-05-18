<template>
    <div>
        <a @click.prevent.stop="$emit('input',!value)"
           :class="{active:value}">
            {{title}} {{value? 'v':'>'}}
        </a>
        <div v-show="value">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['title', 'value'],
    }

</script>


