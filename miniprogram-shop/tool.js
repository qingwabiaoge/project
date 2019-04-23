//生成从minNum到maxNum的随机数
export default {
//一定范围内随机正整数
  randomNum: (n, m) => {
    var random = Math.floor(Math.random() * (m - n + 1) + n);
    return random;
  },
// 验证是[min, max]范围内的正整数
  betweenInt: (min, max) => (rule, v, cb) => {
    const isBetween = v >= min && v <= max
    const isInt = /^[0-9]+$/.test(v)
    if (isBetween && isInt) return cb()

    return cb(new Error(`要求是在${min}到${max}的正整数`))
  }

}

