function add(x, y) {
  return x + y;
}

console.log(1 + 2); // glabal函数
console.log(add(1, 2));// 用户函数
console.log(Object.keys({ a: 1 }));// Object函数的静态函数
console.log({ a: 1 }.toString());// 实例化对象里的函数
const obj = { add };
console.log(obj.add(1, 2));// 自己打包的函数
const i = 1;