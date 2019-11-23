const Dog = require('../../../model/Dog')
const callback = require('../../callback')

/* Model.update(conditions, doc, [options], [callback])
   options选项
   safe (boolean)： 默认为true。安全模式。
　　upsert (boolean)： 默认为false。如果不存在则创建新记录。
　　multi (boolean)： 默认为false。是否更新多个查询记录。
　　runValidators： 如果值为true，执行Validation验证。
　　setDefaultsOnInsert： 如果upsert选项为true，在新建时插入文档定义的默认值。
　　strict (boolean)： 以strict模式进行更新。
　　overwrite (boolean)： 默认为false。禁用update-only模式，允许覆盖记录。
*/

const conditions = { name: '小花' } // 也不能指定id创建
const newValue = { name: 'xiaohua', age: 20 }
const options = { upsert: true }  // 默认为false。如果不存在则创建新记录。不用用_id做条件
Dog.updateOne(conditions, newValue, options, callback)
