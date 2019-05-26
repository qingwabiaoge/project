import creatStyled from '../creatStyled'
import styled from 'vue-styled-components'
import theme from '../theme'


let baseH3 = creatStyled('h3')
const H3 = styled(baseH3)`
font-size:${theme.font_size_h3};
  color: ${theme.color_gray_dark};
  text-transform:uppercase;
`
export default H3

