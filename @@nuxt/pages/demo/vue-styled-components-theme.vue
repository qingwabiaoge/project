<template>
  <Button>
    vue-styled-components-theme

  </Button>
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
