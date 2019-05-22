<template>
  <div>

    <theme-provider :theme="{
        primary: 'palevioletred',
        secondary: 'papayawhip',
        big:'120px'
      }">
      <wrapper>
        <custom-title> Hello World, this is my first styled component!</custom-title>
      </wrapper>
    </theme-provider>
  </div>
</template>

<script>
  import styled,{animation,ThemeProvider} from 'vue-styled-components'

  const CustomTitle = styled.h1`
      font-size: ${props => props.theme.big};
      text-align: center;
      color: ${props => props.theme.primary};
      animation: ${animation} 2s linear infinite;
    `;
  // Create a <Wrapper> vue component that renders a <section> with
  // some padding and a papayawhip background
  const Wrapper = styled.section`
      padding: 4em;
      background: ${props => props.theme.secondary};
    `;

  export default {
    components: {
      'custom-title': CustomTitle,
      wrapper: Wrapper,
      'theme-provider': ThemeProvider
    },
  }
</script>
