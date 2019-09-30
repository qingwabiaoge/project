import Vue from 'vue'

Vue.filter('setLength', function (value, n) {
    return value.substring(0, n)
  }
)


Vue.filter('id2time', function (value) {
  return (new Date(parseInt(value.toString().substring(0, 8), 16) * 1000)).toLocaleDateString();
})
