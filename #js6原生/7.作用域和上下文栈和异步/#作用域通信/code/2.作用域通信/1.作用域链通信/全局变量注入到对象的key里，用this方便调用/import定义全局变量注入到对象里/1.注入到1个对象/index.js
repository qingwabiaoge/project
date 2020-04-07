const obj = {
  i: 1,
  fn() {
    this.m = this.i
  }
}

obj.fn()
console.log(obj)


