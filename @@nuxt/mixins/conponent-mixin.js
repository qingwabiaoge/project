import Vuex from 'vuex'

const userMapObject = Vuex.createNamespacedHelpers('user')
const globalMapObject = Vuex.createNamespacedHelpers('global')
const image1 = require('@/assets/images/test/image1.jpg')
const image2 = require('@/assets/images/test/image2.jpg')
const image3 = require('@/assets/images/test/image3.jpg')
const background = require('@/assets/images/test/backgroud.jpg')
const icon = require('@/assets/images/test/icon.png')
const map = require('@/assets/images/test/map.jpg')
const qcode = require('@/assets/images/test/qcode.png')

const title = 'Fast'
const subtitle = '单层冲锋衣'
const description = '稻城女款单层冲锋衣 OSY-TEX高度防水透气薄膜面料,精密磨砂质感方格图案表面;YKK 耐用顺滑高端拉链;全衣3D立体裁剪;全'
const content = '稻城女款单层冲锋衣 OSY-TEX高度防水透气薄膜面料,精密磨砂质感方格图案表面;YKK 耐用顺滑高端拉链;全衣3D立体裁剪;全稻城女款单层冲锋衣 OSY-TEX高度防水透气薄膜面料,精密磨砂质感方格图案表面;YKK 耐用顺滑高端拉链;全衣3D立体裁剪;全'
const info = '这是描述信息'
const href = '/'

const test = {

  button: 'more+',
  subtitle,
  description,
  title,
  info,
  href,
  image: image1,
  icon,
  map,
  content,
  background,
  bg: '#fff',
  name: 'ModleName',
  tel: '151666666\n888-888888',
  qq: '888888\n6666',
  qcode,
  address: '广东省中山市东城大道NO.001',
  children:
    [
      {
        button: 'more+',
        subtitle,
        description,
        title,
        info,
        href,
        image: image1,
        icon,
        map,
        content,
        background,
        bg: '#fff'

      },
      {
        button: 'more+',
        subtitle,
        description,
        title,
        info,
        href,
        image: image2,
        icon,
        map,
        content,
        background,
        bg: '#fff'

      },
      {
        button: 'more+',
        subtitle,
        description,
        title,
        info,
        href,
        image: image3,
        icon,
        map,
        content,
        background,
        bg: '#fff'

      }
    ]
}

// 把mixin挂载在vue实例
export default {
  props: {
    data: {
      type: [Object, Array],
      default () {
        return test
      }
    },
    inverse: Boolean
  }
  ,

  computed: {

    ...globalMapObject.mapState([
      'global', 'primary'
    ]),

    ...userMapObject.mapState(['token'])
  },
  //mounted以后才有$el
  mounted () {
    // 设置背景
    if (this.$el.style) {

      this.$el.style.background = `${this.data.bg ? this.data.bg : ''} url(${this.data.background}) 0% 0% / cover  fixed`
      //这是设置的--primary-color是一个字符串
      this.$el.style.setProperty('--primary-color', this.primary)

    }
  },
  watch: {
    primary () {
      this.$el.style.setProperty('--primary-color', this.primary)

    }

  }

}
