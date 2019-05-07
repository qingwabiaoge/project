<template>
    <div>

        <div>
            <StyleButton width="500px" height="200px" fontSize="1">马上投标</StyleButton>
        </div>
        <button @click="click">
            ceshi
        </button>

    </div>
</template>
<script>
    import styled from 'vue-styled-components';

    const baseButtonProps = {
        background: {
            default: '#2fcea6',
            type: String
        },
        color: {
            default: 'white',
            type: String
        },
        width: {
            default: '200px',
            type: String
        },
        height: {
            default: '40px',
            type: String
        },
        fontSize: {
            default: '16px',
            type: String
        },
        lineHeight: {
            default: '40px',
            type: String
        },
    }
    const StyleButton = styled('button', baseButtonProps)
        `
        width:${props => props.width};
        height:${props => props.height};
        line-height:${props => props.lineHeight};
        background:${props => props.background};
        color:${props => props.color};
        font-size:${props => props.fontSize};
        border:none;
        border-radius:23px;
   `
    export default {
        components: {

            StyleButton
        },

        methods: {
            click() {
                this.$style.background="#000"
            }
        }
    }
    ;
</script>
