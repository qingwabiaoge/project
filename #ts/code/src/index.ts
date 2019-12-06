/*
限制函数格式
限制了变量函数运行表达式的参数类型
限制了变量返回值的类型
*/
let myAdd: (x: number, y: number) => number

myAdd =function (x, y) {
  return x+y;
};

console.log(myAdd(1,2))
