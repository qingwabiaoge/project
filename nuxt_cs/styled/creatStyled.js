import styled from 'vue-styled-components';
import props from './props'
import theme from './theme'
import {clearFix} from './mixin'
import {rgba, border, position, backgrounds} from 'polished'

const creatStyled = el => styled(el, props)`
transition:all 0.2s;
//width
width:${props => props.width};
height: ${props => props.height};
//color
${props => backgrounds(`url(${props.backgroundImg || ''})`, rgba(props.background, props.alpha))};
color: ${props => props.color};
//display
${props => props.flex ? 'display:flex' : ''};
${props => props.block ? 'display:block' : ''};
${props => props.inline ? 'display: inline-block' : ''};
//position
position:${props => props.position};
left:${props => props.left};
top:${props => props.top};
//padding margin
${props => props.margin ? 'margin:' + props.margin : ''};
${props => props.marginTop ? 'margin-top:' + props.marginTop : ''};
${props => props.marginRight ? 'margin-right:' + props.marginRight : ''};
${props => props.marginBottom ? 'margin-bottom:' + props.marginBottom : ''};
${props => props.marginLeft ? 'margin-left:' + props.marginLeft : ''};
${props => props.padding ? 'padding:' + props.padding : ''};
${props => props.paddingTop ? 'padding-top:' + props.paddingTop : ''};
${props => props.paddingRight ? 'padding-right:' + props.paddingRight : ''};
${props => props.paddingBottom ? 'padding-bottom:' + props.paddingBottom : ''};
${props => props.paddingLeft ? 'padding-left:' + props.paddingLeft : ''};
//font
${props => props.fontSize ? 'font-size: ' + props.fontSize : ''};
${props => props.lineHeight ? 'line-height:' + props.lineHeight : ''};
${props => props.textAlign ? 'text-align:' + props.textAlign : '' };
${props => props.bolder ? `font-weight:bolder` : 'font-weight:normal'};
//border
${props => props.boxShadow ? `box-shadow:${props.boxShadow}` : ''};
${props => props.border ? `border:${theme.border_width} solid ${theme.border_color}` : ''};
border-radius:${props => props.borderRadius} ;
//util
${props => props.clearFix ? clearFix : ''};

 :hover {
    color:${props => props.hoverColor};
    ${props => props.hoverBackground ? backgrounds(rgba(props.hoverBackground, props.hoverAlpha)) : ''};
    ${props => props.hoverBorder ? border('1px', 'solid', 'red') : ''}
  }
`
export default creatStyled

