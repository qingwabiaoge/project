<template>
  <Div color="red" :background="background">

    1111

  </Div>
</template>
<script>

  import styled, {css} from 'vue-styled-components';
  import {clearFix, normalize, rgba, shade, margin, animation, between, cover, padding} from 'polished'

  const props = {
    color:  String,
  background: String
  }

  const Div = styled('div', props)`
 background:url(${props=>props.background});
 ${clearFix()}
  ${animation(['rotate', '1s', 'ease-in-out'], ['colorchange', '2s'])}
  // ${cover()}
  margin:20px 40px;
  color:${props => props.color};
  ${padding('20px')}
`
  /****************************************************************/
  export default {
    data(){
      return{
        background:require('@/assets/images/1.jpg')
      }
    },
    components: {Div}
  }
</script>
