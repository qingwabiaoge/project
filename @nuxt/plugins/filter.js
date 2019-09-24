import Vue from 'vue'

Vue.filter('setLength', function (value, n) {
    return value.substring(0, n)
  }
)


