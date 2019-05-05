import tool from '../tool'

export const state = () => ({
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
  image: [
    {required: true, message: '请上传缩略图!', trigger: 'change'}
  ],
  images: [
    {required: true, message: '请上传缩略图!', trigger: 'change'}
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
  cid: [
    {required: true, message: '请选择类别', trigger: 'blur'}
  ],
  // upCategory: [
  //   {required: true, message: '请选择上级目录', trigger: 'blur'}
  // ],
  route: [
    {required: true, message: '请输入路由', trigger: 'blur'}
  ],
  seoTitle: [{required: true, message: '尺寸对于百度收录很重要', trigger: 'blur'}],
  src: [{required: true, message: '复制要链接的页面网址粘贴到此处', trigger: 'blur'}],
  mark: [{required: true, message: '请输入唯一的组件标签,例:el-input', trigger: 'blur'}],

  //范围

  price: [
    {required: true, message: '价格不能为空', trigger: 'blur'},
    {validator: tool.betweenInt(1, 999999), required: true}

  ],
  number: [
    {required: true, message: '产品数量不能为空', trigger: 'blur'},
    {validator: tool.betweenInt(1, 999999), required: true}
  ],
})

