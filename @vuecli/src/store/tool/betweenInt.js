export default (min, max) => (rule, v, cb) => {
  const isBetween = v >= min && v <= max
  const isInt = /^[0-9]+$/.test(v)
  if (isBetween && isInt) return cb()

  return cb(new Error(`要求是在${min}到${max}的正整数`))
}
