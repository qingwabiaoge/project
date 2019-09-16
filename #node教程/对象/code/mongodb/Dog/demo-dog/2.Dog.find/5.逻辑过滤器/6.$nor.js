const Dog = require('../../../model/Dog')
const callback = require('../../callback')

/*
 db.inventory.find( { $nor: [ { price: 1.99 }, { qty: { $lt: 20 } }, { sale: true } ] }
inventory集合查询所有的文档，条件如下：
字段price不等于1.99，字段qty不小于20，字段sale不等于true;查询的结果包含不存在的字段；

 */

Dog.find({$nor: {name: 'xiaohua', age: {$lte: 11}}}, callback)


