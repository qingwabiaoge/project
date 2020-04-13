import Validator from 'async-validator'

// 规则的描述
const rules = {
  name: {type: 'string', required: true}
}

// 根据规则生成验证器
const validator = new Validator(rules)

// 要验证的对象
const source = {
  name: 'LanTuoXie'
}

// 验证后的回调函数
function callback(errors, fileds) {
  if (errors) {
    console.log(errors)
    // 验证不通过，errors是一个数组，记录那些不通过的错误信息
    // fileds是所有数据源的字段名，也即上面的source的'name'
    // 验证是根据字段名来的，rules.name 对应 source.name。 字段名要一样才会验证
  } else {
    // 下面是验证通过的逻辑
    console.log(fileds)
  }
}

// 验证数据源是否符合规则
validator.validate(source, callback)
