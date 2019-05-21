<template>
<button
class="el-button"
@click="handleClick"
:disabled="buttonDisabled || loading"
:autofocus="autofocus"
:type="nativeType"
:class="[
type ? 'el-button--' + type : '',
    buttonSize ? 'el-button--' + buttonSize : '',
    {
        'is-disabled': buttonDisabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle
    }
]"
>
<i class="el-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
    <span v-if="$slots.default"><slot></slot></span>
</button>
</template>
<script>
export default {
    name: 'ElButton',

    inject: {
        elForm: {
            default: ''
        },
        elFormItem: {
            default: ''
        }
    },

    props: {
        type: {
            type: String, //多属性这样写 类型字符串 模板用三目表达式
            default: 'default'
        },
        size: String,
        icon: {
            type: String,
            default: ''
        },
        nativeType: {
            type: String,
            default: 'button'
        },
        loading: Boolean, //单属性 类型用boolen
        disabled: Boolean,
        plain: Boolean,
        autofocus: Boolean,
        round: Boolean,
        circle: Boolean
    },

    computed: {
        _elFormItemSize() {
            return (this.elFormItem || {}).elFormItemSize;
        },
        buttonSize() {
            return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
        },
        buttonDisabled() {
            return this.disabled || (this.elForm || {}).disabled;
        }
    },

    methods: {
        handleClick(evt) {
            this.$emit('click', evt);
        }
    }
};
</script>
