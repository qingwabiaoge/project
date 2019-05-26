import creatStyled from '../creatStyled'
import styled from 'vue-styled-components'
import theme from '../theme'


let baseH5 = creatStyled('h5')
const H5 = styled(baseH5)`
font-size:${theme.font_size_h5};
  color: ${theme.color_gray_dark};
  text-transform:uppercase;

`
export default H5

