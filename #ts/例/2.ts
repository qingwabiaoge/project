class Person {
  name: String;

  constructor(name) {
    this.name = name
  }

  saySomething() {

  }
}

class Man extends Person {
  constructor(name:string) {
    super(name)
  }

  saySomething() {
    console.log('I am Man')
  }
}

class Woman extends Person {
  constructor(name:string) {
    super(name)
  }

  saySomething() {
    console.log('I am Woman')
  }
}

let man = new Man('a')
let woman = new Woman('b')


function saySex(pepole:Person) { //ts这里会检查参数类型,指定谁去做
   pepole.saySomething()
}

saySex(man)
saySex(woman)

//好处是不用重写saySex, 继承Person的其他子类容易扩展

class Yao extends Person {
  constructor(name:string) {
    super(name)
  }

  saySomething() {
    console.log('I am yao')
  }
}

let yao = new Yao('yao')
saySex(yao) //好处saySex不用重写
