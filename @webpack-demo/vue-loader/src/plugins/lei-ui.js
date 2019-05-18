import Vue from 'vue'

import baseButton from "../components/baseButton";
import baseCollapseItem from '@/components/baseCollapseItem'
//icon

import baseIcon from '@/components/baseIcon'
import baseTabs from '../components/baseTabs'
//slider
import baseSlider from '../components/baseSlider'
import insideBanner from '@/components/insideBanner'
import gotop from '../components/gotop'
import offcanvas from '../components/offcanvas'
import transparent_lay from '../components/transparent_lay'
//分页
import pagination from '../components/pagination'

import popover from '../components/popover'
import collapseNav from '../components/collapseNav'
import collapseNav_item from '../components/collapseNav/collapseNav_item'
//title
import titleSquare from "../components/titleSquare";
import titleUnderline from "../components/titleUnderline"
import titleThroughline from "../components/titleThroughline"
import titlebarA from '../components/titlebarA'
import titleScale from '@/components/titleScale/index.js'


import listFade from '@/components/listFade'
import icolist from '@/components/icolist'
import pictextSimple from '@/components/pictextSimple'
import pictextThree from '@/components/pictextThree/'
import pictextHistory from '@/components/pictextHistory/'
import pictextSlider from '@/components/pictextSlider'
import carouselFull from '@/components/carouselFull'

export default () => {
  Vue.use(baseButton)
  Vue.use(baseCollapseItem)
  Vue.use(baseIcon)
  Vue.use(baseTabs)
  Vue.use(baseSlider)
  Vue.use(gotop)
  Vue.use(offcanvas)
  Vue.use(transparent_lay)
  Vue.use(pagination)
  Vue.use(popover)
  Vue.use(collapseNav)
  Vue.use(collapseNav_item)
  Vue.use(titleSquare)
  Vue.use(titleUnderline)
  Vue.use(titleThroughline)
  Vue.use(listFade)
  Vue.use(icolist)
  Vue.use(pictextSimple)
  Vue.use(pictextThree)
  Vue.use(pictextHistory)
  Vue.use(pictextSlider)
  Vue.use(titlebarA)
  Vue.use(titleScale)
  Vue.use(insideBanner)
  Vue.use(carouselFull)

}
