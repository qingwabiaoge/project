import creatStyled from '../creatStyled'
import styled from 'vue-styled-components'
import theme from '../theme'


let baseH6 = creatStyled('h6')
const H6 = styled(baseH6)`
font-size:${theme.font_size_h6};
  color: ${theme.color_gray_dark};
  text-transform:uppercase;

`
export default H6

