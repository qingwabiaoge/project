export default {
  //把category数组变成coponents对象
  category: state => {
    const _obj = {}
    state.category.forEach(item => _obj[item._id] = item)
    return _obj
  }

}
