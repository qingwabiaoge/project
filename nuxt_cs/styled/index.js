import Vue from 'vue'

import './global/index'
import Div from '@/styled/Div/'
import H1 from '@/styled/h1'
import H2 from '@/styled/h2'
import H3 from '@/styled/h3'
import H4 from '@/styled/h4'
import H5 from '@/styled/h5'
import H6 from '@/styled/h6'


export default () => {
  Vue.use(Div)
  Vue.use(H1)
  Vue.use(H2)
  Vue.use(H3)
  Vue.use(H4)
  Vue.use(H5)
  Vue.use(H6)

}

