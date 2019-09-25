import Vue from 'vue'

const vm = new Vue()
export const state = () => [];

export const getters = {
  components: state => {
    const _conponents = {}
    state.forEach((item, index, self) => {
      _conponents[item.key] = item
    })
    return _conponents
  },
  categorys: state => state.filter(item => item.isCategory === true),
  goodsCategory: (state, getters) => getters.components.goods.children,
  newsCategory: (state, getters) => getters.components.article.children,

  maxId(state, getters) {
    let _maxid = 0
    state.forEach(item => {
      if (item.id > _maxid) {
        _maxid = item.id
        if (item.id.children && item.id.children.length > 0) {
          item.id.children.forEach((i) => {
            if (i.id > _maxid) {
              _maxid = i.id
            }
          })
        }
      }
    })
    return _maxid + 1
  }
}


export const mutations = {
  set(state, components) {
    //Object.assign(state, data)  //不行不会监听新加键值
    // state.push(...data) //第二次会有问题
    for (let item in components) {
      vm.$set(state, item, components[item])
    }
  }
};


export const actions = {
  async get({commit}) {
    const {components} = await this.$axios.get('/components')   //按照键值名分裂数组
    commit('set', components)
  }
  ,
  async put({commit, state}, data) {
    commit('set', data)
    this.$axios.put('components', data)
  }
}


