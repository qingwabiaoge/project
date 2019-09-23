import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'


const requireComponent = require.context('../components', true, /\w+\.(vue)$/
)

requireComponent.keys().forEach(fileName => {

  // 获取组件配置

  const componentConfig = requireComponent(fileName)

  // 获取组件的 PascalCase 命名
  const componentName = upperFirst(
    camelCase(
      // 获取和目录深度无关的文件名
      fileName.split('/')[fileName.split('/').length - 2]
    )
  )

  // 全局注册组件
  Vue.component(
    componentName,
    // 如果这个组件选项是通过 `export default` 导出的，
    // 那么就会优先使用 `.default`，
    // 否则回退到使用模块的根。
    componentConfig.default || componentConfig
  )
})




/*
import Vue from 'vue'

import baseButton from "../components/baseButton";
import baseButtonGroup from "@/components/baseButtonGroup";
import baseCollapseItem from '@/components/baseCollapseItem'
import card from '@/components/card'
import Input from '@/components/Input'
//icon

import iconCircle from '@/components/iconCircle'
import baseTabs from '../components/baseTabs'

//search

import search from '@/components/search'
//slider
import baseCarousel from '../components/baseCarouse'
import gotop from '../components/gotop'
import offcanvas from '../components/offcanvas'
import baseTransparentLay from '../components/baseTransparentLay'
//分页
import pagination from '../components/pagination'
//内页栏目图片
import bannerCategory from '@/components/bannerCategory'

//文章详情页
import articleA from '@/components/articleA'
import popover from '../components/popover'
import collapseNav from '../components/collapseNav'
import collapseNav_item from '../components/collapseNav/collapseNav_item'
import navHorizontal from '@/components/navHorizontal'
//title
import titleSquare from "../components/titleSquare";
import titleMore from '../components/titleMore'
import titleUnderline from "../components/titleUnderline"
import titleThroughline from "../components/titleThroughline"
import titlebarA from '../components/titlebarA'
import titleScale from '@/components/titleScale/index.js'
import titleZhEnglish from '@/components/titleZhEnglish'
import swiperFull from '@/components/swiperFull/'

import picA from '@/components/picA'
import picB from '@/components/picB'
import picC from '@/components/picC'
import picD from '@/components/picD'
import picE from '@/components/picE'
import picF from '@/components/picF'
import icolist from '@/components/iconCircle/icolist'
import pictextSimple from '@/components/pictextSimple'
import pictextThree from '@/components/pictextThree/'
import pictextFour from '@/components/pictextFour'
import pictextHistory from '@/components/pictextHistory/'
import pictextOne from '@/components/pictextOne'
import pictextSlider from '@/components/pictextSlider'
import pictextCompany from '@/components/pictextCompany'
import carouselFull from '@/components/carouselFull'
import textList from '@/components/textList'

import pictextContact from '@/components/pictextContact'

import footerTalk from '@/components/footerTalk'

//客服

import talk from '@/components/talk'

//produce
import goodsA from '@/components/goodsA'


export default () => {
  Vue.use(articleA)
  Vue.use(bannerCategory)
  Vue.use(baseButton)
  Vue.use(baseButtonGroup)
  Vue.use(baseCollapseItem)
  Vue.use(Input)
  Vue.use(iconCircle)
  Vue.use(baseTabs)
  Vue.use(baseCarousel)
  Vue.use(gotop)
  Vue.use(offcanvas)
  Vue.use(baseTransparentLay)
  Vue.use(pagination)
  Vue.use(popover)
  Vue.use(picA)
  Vue.use(picB)
  Vue.use(picC)
  Vue.use(picD)
  Vue.use(picE)
  Vue.use(picF)
  Vue.use(collapseNav)
  Vue.use(collapseNav_item)
  Vue.use(navHorizontal)
  Vue.use(titleMore)
  Vue.use(titleSquare)
  Vue.use(titleUnderline)
  Vue.use(titleThroughline)
  Vue.use(titleZhEnglish)

  Vue.use(swiperFull)
  Vue.use(icolist)
  Vue.use(pictextSimple)
  Vue.use(pictextOne)
  Vue.use(pictextThree)
  Vue.use(pictextFour)
  Vue.use(pictextHistory)
  Vue.use(pictextCompany)
  Vue.use(pictextSlider)
  Vue.use(titlebarA)
  Vue.use(titleScale)
  Vue.use(textList)
  Vue.use(carouselFull)
  Vue.use(pictextContact)
  Vue.use(talk)
  Vue.use(search)
  Vue.use(card)
  Vue.use(footerTalk)
  Vue.use(goodsA)


}
*/
