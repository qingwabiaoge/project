<template>
  <div class="vue-styled-components-cs">
    vue-styled-components-cs
    <Button href="" contenteditable="true">111</Button>
  </div>
</template>

<script>
import styled from 'vue-styled-components'

const Button = styled.button`
  background: ${props => props.theme.primary};
  color: white;
`

export default {

  layout: 'demo',
  components: { Button }
}
</script>
