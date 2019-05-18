<template>

    <div
            ref="button"
            v-if="value"
            :class="[$style['transparent-lay'],
                      type? 'uk-background-'+type+'-transparent':'']"
            @click="click"
    >

    </div>

</template>

<script>

    export default {


        props: {
            type: {
                type: String, //多属性这样写 类型字符串 模板用三目表达式
                default: 'light-black'//primary,black,default
            },
            value: {
                type: Boolean,
                default: false
            }

        },
        methods: {
            click() {
                this.$emit('input', false)
            }
        }

    }
</script>
<style lang="less" module>

    .transparent-lay {
        z-index: 1000;
        position: fixed;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
    }

</style>
