import creatStyled from '../creatStyled'
import styled from 'vue-styled-components'
import theme from '../theme'


let baseH2 = creatStyled('h2')
const H2 = styled(baseH2)`
font-size:${theme.font_size_h2};
 font-weight:bold;
  color: ${theme.color_gray_dark};
  text-transform:uppercase;

`
export default H2

