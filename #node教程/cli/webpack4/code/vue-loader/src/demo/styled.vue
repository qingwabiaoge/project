<template>
    <div>

        <StyleButton :background="red">马上投标</StyleButton>
        <titleSquare width="500px" height="600px" >11</titleSquare>

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
    const width = {
        width: {
            default: '200px',
            type: String
        },
    }
    const StyleButton = styled('div', baseButtonProps)
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

    const titleSquare = styled('titleSquare', baseButtonProps)
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

            StyleButton,
            titleSquare,

        },
        data() {
            return{
                red:'#f00000'
            }
        },
        methods: {
            click() {
                this.$style.background = "#000"
            }
        }
    }
    ;
</script>
