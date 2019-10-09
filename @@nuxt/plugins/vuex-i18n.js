import Vue from 'vue'

const vuexI18n = require('vuex-i18n/dist/vuex-i18n.umd.js')
const {lang} = require('@/nuxt.config')

//修改app.sore
export default ({store}) => {
  Vue.use(vuexI18n.plugin, store);
  const translationsEn = {
    "content": "This is some {type} content"
  };

  // translations can be kept in separate files for each language
  // i.e. resources/i18n/de.json.
  const translationsZh = {
    "home": "首页",
    "Please enter your name": "请输入姓名",
    "Please enter your telephone number": "请输入电话号码",
    "Please enter a message": "请输入留言",
    "weight": "重量",
    "color":"颜色",
    "message":'留言'
  };


  // add translations directly to the application
  Vue.i18n.add('en', translationsEn);
  Vue.i18n.add('zh', translationsZh);

  // set the start locale to use
  Vue.i18n.set(lang);
}
