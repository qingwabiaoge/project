<template>
  <div>
  <Input placeholder="@liqueflies"  type="password"></Input>
  <redInput placeholder="@liqueflies"></redInput>
  </div>
</template>

<script>
  import styled from 'vue-styled-components';

  // Create an <StyledInput> component that'll render an <input> tag with some styles
  const Input = styled.input`
  font-size: 1.25em;
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;

  &:hover {
    box-shadow: inset 1px 1px 2px rgba(0,0,0,0.1);
  }
`;

  const redInput=Input.extend`
color: red;

`
  export default {
    components:{Input,redInput}

  }

</script>
