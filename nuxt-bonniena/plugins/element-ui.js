import Vue from 'vue'


import {
  Form, FormItem, Button,ButtonGroup, Input,
  Carousel, CarouselItem,
  Card, Row, Col, Container,
  Icon,
  Menu, Submenu, MenuItem, MenuItemGroup,
  // Aside,
  Popover, Tooltip,

  Tabs, TabPane,

  Collapse, CollapseItem,

  Breadcrumb, BreadcrumbItem,
  //分页
  Pagination,

  Message,

  Loading

} from 'element-ui'    //引入Button按钮

export default () => {
  Vue.prototype.$loading = Loading.service;
  //message
  Vue.prototype.$message = Message;
  Vue.use(Form)
  Vue.use(FormItem);
  Vue.use(Button)
  Vue.use(Input)
  Vue.use(Carousel)
  Vue.use(CarouselItem)
  Vue.use(ButtonGroup)


//布局------
  Vue.use(Card)
  Vue.use(Row)
  Vue.use(Col)
  Vue.use(Container)

//导航-------------
  Vue.use(Menu);
  Vue.use(Submenu);
  Vue.use(MenuItem);
  Vue.use(MenuItemGroup);
//-------------
  Vue.use(Icon)
//提示-------
  Vue.use(Popover)
  Vue.use(Tooltip)
//tab------------
  Vue.use(Tabs)
  Vue.use(TabPane)
  Vue.use(Collapse)
  Vue.use(CollapseItem)
  // Vue.use(Aside)

  Vue.use(Breadcrumb)
  Vue.use(BreadcrumbItem)

  Vue.use(Pagination)
  //loading
  Vue.use(Loading.directive);


}
