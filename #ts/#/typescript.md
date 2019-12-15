# 关系

| 标识符                                        | 基本类型验证<br />boolen,:string,:number,:T | 一组基本类型验证的组合<br />:myInterface |
| --------------------------------------------- | ------------------------------------------- | ---------------------------------------- |
| 基本类型标识符                                | √                                           |                                          |
| 引用类型 标识符                               | √                                           | √                                        |
| class标识符<br />*class作用:生成指定格式对象* | √                                           | √                                        |

# 基本类型

### :boolean

```ts
let isDone: boolean = false;
```

### :number

```
...
```

### :any

会避开类型检查,和原生相同

```js
let i:any=10
i='str'
```

### :void

某种程度上来说，`void`类型像是与`any`类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 `void`：

```ts
                  //:在()后是针对返回值的
function warnUser(): void {
    console.log("This is my warning message");
}
```

```js
let i:void=undefined
console.log(i)
```

```
let i:void=null
console.log(i)

```

### :Null 和 :Undefined

TypeScript里，`undefined`和`null`两者各自有自己的类型分别叫做`undefined`和`null`。 和 `void`相似，它们的本身的类型用处不是很大：

```ts
// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;
```

### 枚举类型变量

更像数字类型和字符串类型限制了取值范围

```ts
 enum Direction {
  Up,
  Down,
  Left,
  Right,
}
console.log(Direction.Up)//0

```

```ts
 enum Direction {
  Up,
  Down,
  Left,
  Right,
}
console.log(Direction.Up)//1

```

```ts
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

console.log(Direction.Up)

```



### 元组 Tuple变量

(定义数组的每一个value)

```js
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ['hello', 10]; // OK
// Initialize it incorrectly
x = [10, 'hello']; // Error
```



### 数组类型

```
let arrNum:number[] = [1, 2, 3]
let arrString:string[] = ['1', '2', '3']
let arrAny:any[] = [1, '2', {name: 'xiao ming'}]
```

##### ==泛型数组==

```ts
let arr:Array<number>=[1,2,3]
```

Array被ts定义过

```js
interface Array<T> {
  [index:number]: T;
}
//注意和Array<String>比较
let arr: Array<string>;
myArray = ["Bob", "Fred"];

```

# 泛型:T 

(泛型,,宽泛的类型 可在使用阶段才设置的类型)

软件工程中，我们不仅要创建一致的定义良好的API，同时也要考虑可重用性。 组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，这在创建大型系统时为你提供了十分灵活的功能。

在像C#和Java这样的语言中，可以使用`泛型`来创建可重用的组件，一个组件可以支持多种类型的数据。 这样用户就可以以自己的数据类型来使用组件。

------

1. < T > 泛型是一种任意类型，类型是安全的;
2. Any 类型会避开类型的检查
3. T叫做占位符;
4. 泛型是在实例化使用阶段才初始化;
5. 泛型一般用于批量操作;

  T 类似函数的额外的参数

# 对象

```js
let obj:{a:number,b:number}
obj={a:1,b:2}	
```

只读

```ts
let obj:{readonly a:number,readonly b:number}
obj={a:1,b:2}
```

可缺失

```ts
let obj: { a?: number, b?: number }
obj = {a: 1, },
```



# 函数量

### 函数声明

```js
                                 //:在add()后是限制它的返回值的
function add(x: number, y: number): number {
  return x + y;
}

console.log(add(1,2))
```

​          _ts会推断返回值类型所以可以省略返回值的设定_

```js
                            //:在add()后是限制它的返回值的
function(x: number, y: number) { 
    return x + y;
};
```

##### ==声名式函数泛型==

```ts
function identity<T>(arg: T): T { 
  return arg;
}
let output = identity<string>("myString");  //运行方式1(函数指定T数据类型)'string'
let output = identity("myString");  //运行方式2 type of output will be 'string'

```

```ts
function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}
loggingIdentity<string>(['1','2','3']) //为泛型T赋值
```

```ts
function loggingIdentity<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}

loggingIdentity<number>([1,2,3]) //为泛型T赋值
```

参数为对象

```js
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}

let obj = { a: 1, b: 2, c: 3 }

getProperty(obj, 'a') // success

```

### 匿名函数

为变量设置类型检测

```ts

             //:限制了参数类型       =>限制了变量返回值的类型
let myAdd: (x: number, y: number) => number 
 
myAdd =function (x, y) {   
  return x+y;
};

console.log(myAdd(1,2))

```

匿名函数

```ts
                              //:在add()后是限制它的返回值的
function(x: number, y: number): number { 
     return x + y; 
 };
```

匿名函数的值赋值给函数类型变量

```ts
let myAdd: (x: number, y: number) => number  //定义myAdd类型为函数
=function (x: number, y: number): number {   //定义函数参数类型和返回值类型
    return x+y;
  };
console.log(myAdd(1,2))
```

#####    ==匿名函数泛型==

```js
function identity<T>(arg: T): T {
  return arg;
}

let myIdentity: {<T>(arg: T): T} = identity;

```



# 类类型

(本质是构造函数)

```js
class Greeter {
    //ownprototype
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
//原型属性
  greet() {
    return "Hello, " + this.greeting;
  }
}

let greeter = new Greeter("world");
console.log(greeter)

```

**修饰符**

*  `public`(默认)

可以让自己 子类 实例化对象使用

```ts
class Animal {
  public name: string;
  public constructor(theName: string) { this.name = theName; }
  public move(distanceInMeters: number) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}
const dog=new Animal('xiaohei')
console.log(dog)
dog.move(10)

```

* private

  只可以自己使用

```ts
class Animal {
  private name: string;
  constructor(theName: string) { this.name = theName; }
}

const cat=new Animal("Cat") // 错误: 'name' 是私有的.
console.log(cat) //{name: "Cat"}
console.log(cat.name)// 错误: 'name' 是私有的.

```

TypeScript使用的是结构性类型系统。 当我们比较两种不同的类型时，并不在乎它们从何处而来，如果所有成员的类型都是兼容的，我们就认为它们的类型是兼容的。

```ts
class Animal {
   name: string;
  constructor(theName: string) { this.name = theName; }
}

class Rhino extends Animal {
  constructor() { super("Rhino"); }
}

class Employee {
   name: string;
  constructor(theName: string) { this.name = theName; }
}

let animal = new Animal("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");

animal = rhino;
animal = employee; 

```

```ts
class Animal {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

class Rhino extends Animal {
    constructor() { super("Rhino"); }
}

class Employee {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

let animal = new Animal("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");

animal = rhino;
animal = employee; // 错误: Animal 与 Employee 不兼容.
```

* protect	

​       可以让子类使用

```ts
class Person {
  protected name: string;
  constructor(name: string) { this.name = name; }
}

class Employee extends Person {
  private department: string;

  constructor(name: string, department: string) {
    super(name)
    this.department = department;
  }

  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
 console.log(howard.name); // 错误

```

* readonly 只读

```ts
class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor (theName: string) {
        this.name = theName;
    }
}
let dad = new Octopus("Man with the 8 strong legs");
dad.name = "Man with the 3-piece suit"; // 错误! name 是只读的.
```

**extend**

```ts
class Animal {
  //own属性
  age: number
  constructor(age: number) {
    this.age = age;
  }
  //原型属性
  move(distanceInMeters: number = 0) {
    console.log(`Animal moved ${distanceInMeters}m.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log('Woof! Woof!');
  }
}

const dog = new Dog(10);
dog.bark();
dog.move(10);
dog.bark();

```

### ==泛型类==

```ts
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };
```

# 类型断言

有时候你会遇到这样的情况，你会比TypeScript更了解某个值的详细信息。 通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型。

通过*类型断言*这种方式可以告诉编译器，“相信我，我知道自己在干什么”。 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 它没有运行时的影响，只是在编译阶段起作用。 TypeScript会假设你，程序员，已经进行了必须的检查。

### 类型断言有两种形式。 

1.“尖括号”语法：

```ts
let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;
```

2.`as`语法：

```ts
let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;
```

两种形式是等价的。 至于使用哪个大多数情况下是凭个人喜好；然而，当你在TypeScript里使用JSX时，只有 `as`语法断言是被允许的。

# interface

==为引用类型和class类型的值设置一组规则==

TypeScript的核心原则之一是对值所具有的*结构*进行类型检查。 它有时被称做“鸭式辨型法”或“结构性子类型化”。 在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。

对变量限制的一组规则

### 接口语法

##### 对象标识符接口(契约)		

```ts
interface LabelledValue {
  label: string; //只能使用label,不用使用size
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

let myObj = {size: 10,label: "Size 10 Object"};
printLabel(myObj);

```

```js
interface LabelledValue {
  label: string; //可以使用label和size
  size:number

}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label,labelledObj.size);
}

let myObj = {size: 10,label: "Size 10 Object"};//參數必須有label和size
printLabel(myObj);

```

```ts
interface LabelledValue {
  label?: string;
  size?:number

}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label,labelledObj.size);
}

let myObj = {size: 10}; //參數可以選擇使用或者不使用label和size
printLabel(myObj);

```

只读对象

```ts
interface Point {
  readonly x: number; 
  readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
p1.x = 5; // error!只讀不能改變

```

可缺失

```
interface Point {
   x: number;
   y?: number;
}

let p1: Point = { x: 10, };
console.log(p1)

```

###### ==带泛型==

```ts
interface LabelledValue<T> {
  label: T; //只能使用label,不用使用size
}

function printLabel(labelledObj: LabelledValue<string>) {
  console.log(labelledObj.label);
}

let myObj = {size: 10,label: "Size 10 Object"};
printLabel(myObj);

```



##### 数组接口

```js
interface NumberArr{
    [index:number]: number
}
let arrNumber:NumberArr = [1, 2, 3]

interface StringArr{
    [index:number]: string
}
let arrString:StringArr = ['1', '2', '3']

interface ObjectArr{
    [index:number]: object
}
let arrObject:ObjectArr = [
    {name: 'xiao ming'},
    {name: 'han mei mei'}
]
```

```tsx
interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];

```

###### ==带泛型==

```ts
interface StringArray<T> {
  [index:number]: T;
}
//注意和Array<String>比较
let myArray: StringArray<string>;
myArray = ["Bob", "Fred"];

```



##### 函数标识符接口

```ts
interface SearchFunc { //函數類型接口
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
}

//对于函数类型的类型检查来说，函数的参数名不需要与接口里定义的名字相匹配。 比如，我们使用下面的代码重写上面的例子：

mySearch = function (src: string, sub: string): boolean {
  let result = src.search(sub);
  return result > -1;
}

```

###### ==带泛型==

```ts
interface GenericIdentityFn {
  <T>(m: T): T;
}

let myIdentity: GenericIdentityFn = function (m) {
  return m
};

 myIdentity(1)

```

```
interface GenericIdentityFn<T> {
  (arg: T): T;
}

let myIdentity: GenericIdentityFn<number> = function (arg) {
  return arg
};

const i: number = myIdentity(1)
console.log(i)

```



##### 类的接口

```ts
interface ClockInterface {
    currentTime: Date;
}

class Clock implements ClockInterface {
    currentTime: Date;
    constructor(h: number, m: number) { }
}
```

```ts
interface ClockInterface {
  currentTime: Date;
  setTime(d: Date);
}

class Clock implements ClockInterface {
  currentTime: Date;
  setTime(d: Date) {
    this.currentTime = d;
  }
  constructor(h: number, m: number) { }
}
const i= new Clock(1,2)
i.setTime(new Date)
console.log(i)

```

当你操作类和接口的时候，你要知道类是具有两个类型的：静态部分的类型和实例的类型。 你会注意到，当你用构造器签名去定义一个接口并试图定义一个类去实现这个接口时会得到一个错误：

```ts
interface ClockConstructor {
    new (hour: number, minute: number);
}

class Clock implements ClockConstructor {
    currentTime: Date;
    constructor(h: number, m: number) { }
}
```

```ts
interface ClockInterface {
  tick();
}

//定义 new Class
interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}


class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) { }
  tick() {
    console.log("beep beep");
  }
}
class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) { }
  tick() {
    console.log("tick tock");
  }
}


function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
  return new ctor(hour, minute);
}
let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);

```

###### 类的多个接口

```js
interface InterfaceOne {
    //
    sports():void;
}
interface InterfaceTwo {
    //
    swimming():void
}
// 接口集成接口
interface InterfaceThree extends InterfaceOne,InterfaceTwo {
    //
    coding():void;
}

class ParentCls {
    name:string;
    constructor(name:string){
        this.name = name
    }
    //
    ktv(){
        console.log(this.name + '唱歌');
    }
}
// 继承父类实现多接口
class SubCls extends ParentCls implements InterfaceTwo, InterfaceOne {
    
    // 实现接口
    sports(){
        console.log(this.name + '运动')
    }

    swimming(){
        console.log(this.name + '游泳')
    }
}
let subCls = new SubCls('小明');
subCls.sports()
subCls.swimming();
subCls.ktv()

//
class SubCls2 extends ParentCls implements InterfaceThree {
    //
    coding(){
        console.log(this.name + '写代码');
    }
    sports(){
        console.log(this.name + '运动');
    }
    swimming(){
        console.log(this.name + '游泳')
    }
}
let subCls2 = new SubCls2('小王');
subCls2.coding();
subCls2.sports();
subCls2.ktv();
subCls.swimming();
```

###### ==带泛型==

```ts
interface ClockInterface<T> {
  currentTime: T;
}

class Clock implements ClockInterface<Date> {
  currentTime: Date;

  constructor(h: number, m: number) {
  }
}

```

### 接口(契约)继承接口

```ts
interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
```

##### 接口继承多个接口

```ts
interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
```

### 接口继承类

```js
class Point {
    x: number;
    y: number;
}

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};
```




