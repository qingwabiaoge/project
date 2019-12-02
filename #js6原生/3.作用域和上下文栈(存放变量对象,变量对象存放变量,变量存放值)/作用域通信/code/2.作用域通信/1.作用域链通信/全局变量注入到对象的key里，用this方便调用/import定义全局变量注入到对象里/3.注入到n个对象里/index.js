
function Person(name) {

  this.name = name
}

Person.prototype.sayName = function () {
  console.log(this.name)
}


const xiaoming=new Person()

console.log(xiaoming)
