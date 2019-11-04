export default {
  //把component数组变成coponents对象
  components: state => {

    const _conponents = {}
    state.components.forEach(item => _conponents[item.name] = item)
    return _conponents
  },
  categorys: state => {
    let arr = state.components.filter(item => item.isCategory === true)
    arr.forEach(item => {
      item.href = item.href || `/${item.name}`;
      if (item.children) {
        item.children.forEach(i => {
          i.href = i.href || `/${item.name}/${i.name}?page=1`;
        })
      }
    })
    return arr
  },
  produceCategory: (state, getters) => getters.components.produce.children,
  articleCategory: (state, getters) => getters.components.article.children,

  /*  maxId(state, getters) {
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
    }*/
}
