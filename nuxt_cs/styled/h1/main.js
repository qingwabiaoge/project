import creatStyled from '../creatStyled'
import styled from 'vue-styled-components'
import theme from '../theme'


let baseH1 = creatStyled('h1')
const H1 = styled(baseH1)`
font-size:${theme.font_size_h1};
 font-weight:bold;
  color: ${theme.color_gray_dark};
  text-transform:uppercase;

`
export default H1

