const Dog = require('../../../model/Dog')
const callback = require('../../callback')

/*
 db.inventory.find( { $nor: [ { price: 1.99 }, { qty: { $lt: 20 } }, { sale: true } ] }
inventory���ϲ�ѯ���е��ĵ����������£�
�ֶ�price������1.99���ֶ�qty��С��20���ֶ�sale������true;��ѯ�Ľ�����������ڵ��ֶΣ�

 */

Dog.find({$nor: {name: 'xiaohua', age: {$lte: 11}}}, callback)


