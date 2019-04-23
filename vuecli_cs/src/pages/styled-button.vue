<template>

  <div>


    <button>button</button>
    <br>
    <Button primary height="50px" font-size="20px" >马上投标</Button>


  </div>

</template>
<script>
  import styled from 'vue-styled-components';
  //声明常量,用于以后变色
  const PRIMARY = '#00f'
  //还可以写mixin


  //写组件  声明变量,变量类型,和默认值,用于最终的组件标签设置变量
  const ButtonProps = {
    width: {
      default: '200px',
      type: String
    },
    height: {
      default: '40px',
      type: String
    },
    marginTop:{
      style:String
    },
    fontSize: {
      default: '10px',
      type: String
    },
    lineHeight: {
      default: '40px',
      type: String
    },
    primary: Boolean
  }
  //写组件的css样式代码
  const Button = styled('button', ButtonProps)
    `
    width:${props => props.width};
    height:${props => props.height};
    line-height:${props => props.lineHeight};
    background: ${props => props.primary ? `${PRIMARY}` : 'white'};
    color: ${props => props.theme.primary};
    font-size:${props => props.fontSize};
    border:none;
    margin-top:${props=>props.marginTop};
    border-radius:23px;
   `

export default {
    components:{Button}
}

</script>
