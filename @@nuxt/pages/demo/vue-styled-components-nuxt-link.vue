<template>
  <div class="vue-styled-components-cs">

    <StyledLinkWrap>
      <nuxt-link to="/" contenteditable="true">111</nuxt-link>
    </StyledLinkWrap>
  </div>
</template>

<script>

import styled from 'vue-styled-components'


const StyledLinkWrap = styled('span')`
  a{
  color: ${props => props.theme.primary};
  }
`

export default {
  layout: 'demo',
  components: { StyledLinkWrap }
}
</script>
