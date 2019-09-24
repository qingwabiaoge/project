export const state = () => [];

export const getters = {
  components(state, getters) {
    const _conponents = {}
    state.forEach((item, index, self) => {
      _conponents[item.key] = item
    })
    return _conponents
  },
  categorys(state, getters) {
    const _categorys = state.filter(item => item.isCategory === true)
    return _categorys
  }
  ,
  goodsCategory(state, getters) {
    return getters.components.goods.children
  }
  ,
  articleCategory(state, getters) {
    return getters.components.article.children
  }
  ,
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


export const mutations= {
  set(state, data) {
    state.push(...data)
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


