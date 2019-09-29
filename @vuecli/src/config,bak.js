import tool from './tool'

/*
----------------------@配置文件说明----------------------
value用于ele-table选择框的值,
     用于ele-select选择器的vulue
     用于radio-button-groud选择器的值 (radio-button-groud 无text和value)
text用于表格过滤器选择框显示的对应的文字
label用于element的select选项的文字

ico对应栏目的ico-font图标
*/

export default {
  //远程主机地址
  host: 'http://127.0.0.1:3000/api/',
  //远程主机根目录
  // baseRoot:'client',

//produce栏目
  /*produceCategory: [{
    value: '沙发',
    label: '沙发',//select显示文字
    text: '沙发', //筛选器显示文字
    ico:'jiaju-danrenshafa'
  }, {
    value: '床',
    label: '床'
    , text: '床'
    ,   ico:'chuang'
  }, {
    value: '电视柜',
    label: '电视柜'
    , text: '电视柜'
    , ico:'jiajutubiao-'
  }, {
    value: '椅',
    label: '椅'
    , text: '椅'
    ,   ico:'yizi'
  }, {
    value: '餐台',
    label: '餐台'
    , text: '餐台'
    ,   ico:'jiudiancanting-'
  }
    , {
      value: '茶台',
      label: '茶台'
      , text: '茶台'
      , ico:'ketingcanzhuo'
    }
      , {
          value: '衣柜',
          label: '衣柜'
          , text: '衣柜'
        , ico:'yigui"'
      }
      , {
          value: '书柜',
          label: '书柜'
          , text: '书柜'
          , ico:'shujiashugui'
      }
      , {
          value: '餐边柜',
          label: '餐边柜'
          , text: '餐边柜'
          ,   ico:'chuangtougui'
      }
      , {
          value: '鞋柜',
          label: '鞋柜'
          , text: '鞋柜'
          ,   ico:'xiegui'
      } , {
          value: '穿衣鏡',
          label: '穿衣鏡'
          , text: '穿衣鏡'
          ,   ico:'jiaju-1'
      } , {
          value: '博古架',
          label: '博古架'
          , text: '博古架'
          ,   ico:'jiaju-'
      }
  ],*/

  produceCategory: [{
    path: '/produce/幻彩漆',
    value: '幻彩漆',
    label: '幻彩漆',//select显示文字
    text: '幻彩漆', //筛选器显示文字
    evalue: 'FANCY PAINT',
    ico: 'jiaju-danrenshafa'

  },
    {
      path: '/produce/丽彩丝缎',
      value: '丽彩丝缎',
      label: '丽彩丝缎',//select显示文字
      text: '丽彩丝缎', //筛选器显示文字
      evalue: 'FANCY PAINT',
      ico: 'jiaju-danrenshafa'
    },
    {
      path: '/produce/丽彩丝绒',
      value: '丽彩丝绒',
      label: '丽彩丝绒',//select显示文字
      text: '丽彩丝绒', //筛选器显示文字
      evalue: 'FANCY PAINT',
      ico: 'jiaju-danrenshafa'
    },
    {
      path: '/produce/叠影',
      value: '叠影',
      label: '叠影',//select显示文字
      text: '叠影', //筛选器显示文字
      evalue: 'FANCY PAINT',
      ico: 'jiaju-danrenshafa'
    },
    {
      path: '/produce/水性底漆',
      value: '水性底漆',
      label: '水性底漆',//select显示文字
      text: '水性底漆', //筛选器显示文字
      evalue: 'FANCY PAINT',
      ico: 'jiaju-danrenshafa'
    },
    {
      path: '/produce/丽彩砂',
      value: '丽彩砂',
      label: '丽彩砂',//select显示文字
      text: '丽彩砂', //筛选器显示文字
      evalue: 'FANCY PAINT',
      ico: 'jiaju-danrenshafa'
    },
    {
      path: '/produce/艺术辅料',
      value: '艺术辅料',
      label: '艺术辅料',//select显示文字
      text: '艺术辅料', //筛选器显示文字
      evalue: 'FANCY PAINT',
      ico: 'jiaju-danrenshafa'
    },
    {
      path: '/produce/瓦格丝特',
      value: '瓦格丝特',
      label: '瓦格丝特',//select显示文字
      text: '瓦格丝特', //筛选器显示文字
      evalue: 'FANCY PAINT',
      ico: 'jiaju-danrenshafa'
    },
    {
      path: '/produce/印花水漆',
      value: '印花水漆',
      label: '印花水漆',//select显示文字
      text: '印花水漆', //筛选器显示文字
      evalue: 'FANCY PAINT',
      ico: 'jiaju-danrenshafa'
    },

    {
      path: '/produce/银彩系列',
      value: '银彩系列',
      label: '银彩系列',//select显示文字
      text: '银彩系列', //筛选器显示文字
      evalue: 'FANCY PAINT',
      ico: 'jiaju-danrenshafa'
    }],


  //article 栏目
  articleCategory: [

    {
      path: '/公司新闻',
      value: '公司新闻',
      label: '公司新闻',//select显示文字
      text: '公司新闻' //筛选器显示文字
    },
    {
      path: '/行业新闻',
      value: '行业新闻',
      label: '行业新闻'
      , text: '行业新闻'
    }
  ],
//本组只有label有用
//   component: [
//     {text: 'carousel_full', value: 'carousel_full', label: 'carousel_full'},
//     {text: 'pic_text2', value: 'pic_text2', label: 'pic_text2'},
//     {text: 'pic_text1', value: 'pic_text1', label: 'pic_text1'}
//   ],
  //推荐到那个位置
  flag: [
    {text: '首页', value: '首页', label: '首页'},
    {text: '产品列表页', value: '产品列表页', label: '产品列表页'},
    {text: '文章列表页', value: '文章列表页', label: '文章列表页'},
    {text: '文章页', value: '文章页', label: '文章页'},
    {text: '商品详情页', value: '商品详情页', label: '商品详情页'},
  ],
  rules: {
    //非空
    username: [
      {required: true, message: '请输入用户名', trigger: 'blur'}
    ],
    password: [
      {required: true, message: '请输入密码', trigger: 'blur'}
    ],
    title: [
      {required: true, message: '请输入名称或标题', trigger: 'blur'}
    ],
    picture: [
      {required: true, message: '请上传缩略图', trigger: 'blur'}

    ],
    images: [
      {required: true, message: '请上传缩略图', trigger: 'change'}
    ],
    imageUrl: [
      {required: true, message: '请上传缩略图', trigger: 'change'}
    ],
    logo: [
      {required: true, message: '请上传logo', trigger: 'change'}
    ],
    href: [
      {required: true, message: '请输入链接地址', trigger: 'change'}
    ],
    position: [
      {required: true, message: '请选择投放位置', trigger: 'change'}
    ],

    content: [
      {required: true, message: '你还没有编辑商品详情内容哦', trigger: 'blur'}
    ],
    beian: [
      {required: true, message: '请输入备案号', trigger: 'blur'}
    ],
    category: [
      {required: true, message: '请选择类别', trigger: 'blur'}
    ],
    upCategory: [
      {required: true, message: '请选择上级目录', trigger: 'blur'}
    ],
    route: [
      {required: true, message: '请输入路由', trigger: 'blur'}
    ],
    seoTitle: [{required: true, message: '尺寸对于百度收录很重要', trigger: 'blur'}],
    src: [{required: true, message: '复制要链接的页面网址粘贴到此处', trigger: 'blur'}],

    //范围

    price: [
      {required: true, message: '价格不能为空', trigger: 'blur'},
      {validator: tool.betweenInt(1, 999999), required: true}

    ],
    number: [
      {required: true, message: '产品数量不能为空', trigger: 'blur'},
      {validator: tool.betweenInt(1, 999999), required: true}
    ],

  }

}
