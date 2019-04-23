import goodsCategory from './goodsCategory'
import articleCategory from './articleCategory'
import flag from './flag'
import rules from './rules'
import nuxt_config from '../../../@nuxt/nuxt.config'

export default {
  //远程主机地址
  host: `http://${nuxt_config.env.HOST}:${nuxt_config.env.PORT}/api`,
   // host: 'http://47.107.170.105:3002/api/',
  //远程主机根目录
  // baseRoot:'client',
  goodsCategory,
  articleCategory,
//本组只有label有用
//   component: [
//     {text: 'carousel_full', value: 'carousel_full', label: 'carousel_full'},
//     {text: 'pic_text2', value: 'pic_text2', label: 'pic_text2'},
//     {text: 'pic_text1', value: 'pic_text1', label: 'pic_text1'}
//   ],
  //推荐到那个位置
  flag,
  rules

}
