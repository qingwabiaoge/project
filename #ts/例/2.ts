interface GenericIdentityFn<T> {
  (arg: T): T;
}

let myIdentity: GenericIdentityFn<string> = function (arg) {
  return arg
};

const i: string = myIdentity('1')
console.log(i)
