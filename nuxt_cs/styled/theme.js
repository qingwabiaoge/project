export default {

  breakpoint_phone: '640px', // Phone landscape
  breakpoint_tablet: '960px', // Tablet Landscape
  breakpoint_desktop: '1200px', // Desktop
  breakpoint_largeScreens: '1600px', // Large Screens


  breakpoint_xsmall_max: '(breakpoint_phone _ 1)',
  breakpoint_phone_max: '(breakpoint_tablet _ 1)',
  breakpoint_tablet_max: '(breakpoint_desktop _ 1)',
  breakpoint_desktop_max: '(breakpoint_largeScreens _ 1)',

// Global variables
// ========================================================================

//
// Typography
//
  font_family: "Arial, 'Times New Roman', 'Microsoft YaHei', SimHei, '宋体', sans-serif",
  font_size: '14px', //普通字体大小
  line_height: '1.5', // 24px

  font_size_h1: '2.28rem', // 32px
  font_size_h2: '1.92rem', // 27px
  font_size_h3: '1.285rem', // 18px
  font_size_h4: '1.15rem', // 26px
  font_size_h5: '1rem', //14px
  font_size_h6: '0.875rem', // 12px
//
// grey
//

  color_black: '#000',
  color_gray_darker: ' #222',//invert较黑背景
  color_gray_dark: '#333', //字体加重字体颜色,h1_h6,i,b链接,镂空button边框
  color_gray: '#666', //普通字体颜色
  color_gray_light: '#999', //次要字体颜色
  color_gray_lighter: '#bbb', //灰色背景
  color_gray_lightest: '#f5f5f5', //高亮背景
  color_white: '#fff', //普通背景,反色字体颜色
  color_primary: '#e2c083', //主色调
  color_success: '#32d296', //点睛色
  color_warning: '#faa05a',
  color_danger: '#f0506e',

// Spacings

  margin_smallest: '5px',
  margin_smaller: '10px',
  margin_small: '20px',
  margin: '25px',
  margin_large: '35px',
  margin_larger: '45px',
  margin_largest: '70px',

// Used in grid, column, container, align, card, padding

  gutter_smallest: '5px',
  gutter_smaller: '10px',
  gutter_small: '20px',
  gutter: '25px',
  gutter_large: '35px',
  gutter_larger: '45px',
  gutter_largest: '70px',

// Controls

  control_height: '40px',
  control_small_height: '30px',
  control_large_height: '55px',

// Z_index

  z_index: '1000',

//
// Borders
//

  border_width: '1px',
  border_color: '#E6E6E6',
  border_color_dark: '#333',
//
//弧度

  radius_small: '2px',
  radius: '20px',
  radius_circle: '50%',

//
  /*h_shadow	必需。水平阴影的位置。允许负值。
  v_shadow	必需。垂直阴影的位置。允许负值。
  blur	可选。模糊距离。
  spread	可选。阴影的尺寸。
  color	可选。阴影的颜色。请参阅 CSS 颜色值。
  inset	可选。将外部阴影 (outset) 改为内部阴影。*/
//

  shadow_smaller: '0 2px 8px rgba(0, 0, 0, 0.08)',
  shadow_small: '0 4px 15px rgba(0, 0, 0, 0.08)',
  shadow: '0 5px 15px rgba(0, 0, 0, 0.08)',
  shadow_large: '0 14px 25px rgba(0, 0, 0, 0.16)',
  shadow_larger: '0 28px 50px rgba(0, 0, 0, 0.16)',

//过渡速度
  translation_long: '1s',
  translation: '0.5s',
  translation_short: '0.2s',

}
