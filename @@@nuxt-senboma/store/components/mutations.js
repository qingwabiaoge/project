export default {
  set(state, components) {
    //Object.assign(state, data)  //不行不会监听新加键值
    // state.push(...data) //第二次会有问题
    /* for (let item in components) {
       vm.$set(state, item, components[item])
     }*/
    state.components = components

  }
};
