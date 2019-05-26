export default {
  //width height
  width: String,
  height: String,
  //color
  position: String,
  top: String,
  right: String,
  bottom: String,
  left: String,
  background: {
    type: String,
    default: '#fff'
  },
  backgroundImg: String,
  color: String,
  //背景透明度
  alpha: {
    type: Number,
    default: 0
  },
  opacity: {
    type: Number,
    default: 1
  },
  //display
  flex: Boolean,
  inline: Boolean,
  block: Boolean,

//margin
  margin: {
    default: 0,
    style: String
  },
  marginTop: {
    default: 0,
    style: String
  },
  marginRight: {
    default: 0,
    style: String
  },
  marginBottom: {
    default: 0,
    style: String
  },
  marginLeft: {
    default: 0,
    style: String
  },
//padding
  padding: {
    default: 0,
    style: String
  },
  paddingTop: {
    default: 0,
    style: String
  },
  paddingRight: {
    default: 0,
    style: String
  },
  paddingBottom: {
    default: 0,
    style: String
  },
  paddingLeft: {
    default: 0,
    style: String
  },
//text
  fontSize: {
    default: '10px',
    type: String
  }
  ,
  lineHeight: {
    default: '1.5',
    type: String
  }
  ,
  textAlign: {
    default: 'left',
    type: String
  },
  bolder: Boolean,

  //border
  border: Boolean,
  borderRadius: String,
  boxShadow: {
    type: String
  },

//util
  clearFix: Boolean,
  //hover
  hoverColor: String,
  hoverBackground: String,
  hoverAlpha:Number,
  hoverBorder: true

}
