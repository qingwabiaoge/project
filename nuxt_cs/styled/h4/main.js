import creatStyled from '../creatStyled'
import styled from 'vue-styled-components'
import theme from '../theme'


let baseH4 = creatStyled('h4')
const H4 = styled(baseH4)`
font-size:${theme.font_size_h4};
  color: ${theme.color_gray_dark};
  text-transform:uppercase;

`
export default H4

