/* components/Message/index.js */
import msg from './index.vue';

//定义插件对象
const Message = {};
//Vue的install方法，用于定义vue插件
Message.install = function(Vue, options){
  const MessageInstance = Vue.extend(msg);
  let currentMsg;
  const initInstance = () =>{
//实例化vue示例
    currentMsg = new MessageInstance();
    let msgEl = currentMsg.$mount().$el;
    document.body.appendChild(msgEl);
  };
//在Vue的原型上添加实例，以全局调用
  Vue.prototype.$msg = {
    showMsg(options){
      if(!currentMsg){
        initInstance();
      }
      Object.assign(currentMsg, options); //将页面的对象传给currentMsg对象，否则阿会使用原有的
      setTimeout(() => {
        currentMsg.close();
      }, 1000);
    }
  }
};
export default Message;
