import Vue from 'vue'


import {

//布局--------------------------------------------------------
  Card, Row, Col, Container,
  Divider,
  Backtop,
  InfiniteScroll,
  //表单-----------------------------------------------------

//   Form, FormItem,  Input, Table, TableColumn, Option, Switch, Select, Upload,colorPicker,
   Button, ButtonGroup,
  Dialog,
//   Carousel, CarouselItem,


  Icon,
  Menu, Submenu, MenuItem, MenuItemGroup,

  Drawer,
//   // Aside,
//   Popover, Tooltip,
//
//   Tabs, TabPane,
//
//   Collapse, CollapseItem,
//
//   Breadcrumb, BreadcrumbItem,
//   //分页
//   Pagination,
// //信息
//   Message,
//   Loading,
//   MessageBox,
//   Notification,


} from 'element-ui'    //引入Button按钮


export default () => {
//
//   //表单
//   Vue.use(Form)
//   Vue.use(FormItem);
    Vue.use(Button)
//   Vue.use(Input)
//   Vue.use(Carousel)
//   Vue.use(CarouselItem)
//   Vue.use(ButtonGroup)
//   Vue.use(Upload)
//   Vue.use(Table);
//   Vue.use(TableColumn);
//   Vue.use(Option)
//   Vue.use(Switch)
//   //对话框
  Vue.use(Dialog)
//   Vue.use(Select)
//   Vue.use(colorPicker)
//
//布局------
  Vue.use(Card)
  Vue.use(Row)
  Vue.use(Col)
  Vue.use(Container)
  Vue.use(Divider)
  Vue.use(InfiniteScroll)

//导航-------------
  Vue.use(Menu);
  Vue.use(Submenu);
  Vue.use(MenuItem);
  Vue.use(MenuItemGroup);

  Vue.use(Drawer)
  Vue.use(Backtop)
//-------------
  Vue.use(Icon)
// //提示-------
//   Vue.use(Popover)
//   Vue.use(Tooltip)
// //tab------------
//   Vue.use(Tabs)
//   Vue.use(TabPane)
//   Vue.use(Collapse)
//   Vue.use(CollapseItem)
//   // Vue.use(Aside)
//
//   Vue.use(Breadcrumb)
//   Vue.use(BreadcrumbItem)
//
//   Vue.use(Pagination)
//   //loading
//   Vue.use(Loading.directive);
//   Vue.prototype.$loading = Loading.service;
//   Vue.prototype.$msgbox = MessageBox;
//   Vue.prototype.$alert = MessageBox.alert;
//   Vue.prototype.$confirm = MessageBox.confirm;
//   Vue.prototype.$prompt = MessageBox.prompt;
//   Vue.prototype.$notify = Notification;
//   Vue.prototype.$message = Message;


}
