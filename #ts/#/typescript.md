# 类型验证

对基本值和对象进行约束

### 对基本值约束

```js
let isDone: boolean = false;
```

### 对对象类型约束

```js
let i :InterfaceName
```

# 简单结构

### :boolean

```ts
let isDone: boolean = false;
```

### :number

```
...
```

### :string

```
let str:string='abc'
```

### :any

会避开类型检查,和原生相同

```js
let i:any=10
i='str'
```

### 泛型:T 

(泛型,,宽泛的类型 可在使用阶段才设置的类型)

软件工程中，我们不仅要创建一致的定义良好的API，同时也要考虑可重用性。 组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，这在创建大型系统时为你提供了十分灵活的功能。

在像C#和Java这样的语言中，可以使用`泛型`来创建可重用的组件，一个组件可以支持多种类型的数据。 这样用户就可以以自己的数据类型来使用组件。

------

1. < T > 泛型是一种任意类型，类型是安全的;
2. Any 类型会避开类型的检查
3. T叫做占位符;
4. 泛型是在==实例化==使用阶段才初始化;
5. 泛型一般用于批量操作;

  T 类似函数的额外的参数

### :void

某种程度上来说，`void`类型像是与`any`类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 `void`：

 *相当于null和undefined的合体*

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

### 枚举类型

枚举类型也表示一类事物,一类里就几个成员,

##### 由名称找值

`enum`类型是对JavaScript标准数据类型的一个补充。 像C#等其它语言一样，==使用枚举类型可以为一组数值赋予友好的名字==。

```ts
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
```

默认情况下，从`0`开始为元素编号。 你也可以手动的指定成员的数值。 改成从 `1`开始编号： 

```ts
enum Color {Red = 1, Green, Blue}
let c: Color = Color.Green;
```

或者，全部都采用手动赋值：

```ts
enum Color {Red = 1, Green = 2, Blue = 4}
let c: Color = Color.Green;
```

字符串做值

```ts
enum Direction {
  Up = "PressUpkey",
  Down = "PressDownKkey",
  Left = "PressLeftKkey",
  Right = "PressRightkey",
}

console.log(Direction.Up)

```

##### 由值找名称

枚举类型提供的一个便利是你可以由枚举的值得到它的名字。 例如，我们知道数值为2，但是不确定它映射到Color里的哪个名字，我们可以查找相应的名字：

```ts
enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2];

console.log(colorName); 
```

### 数组

```js
let arrNum:number[] = [1, 2, 3]
let arrString:string[] = ['1', '2', '3']
let arrAny:any[] = [1, '2', {name: 'xiao ming'}]
```



### 联合类型

```ts
let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
```

# 元组 

[对比数组](#数组)

元:多元的意思

元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 比如，你可以定义一对值分别为 `string`和`number`类型的元组。

```js
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ['hello', 10]; // OK
// Initialize it incorrectly
x = [10, 'hello']; // Error
```



# Class和interface

## 区别

##### 相同点

为结构化值做一组验证

##### 不同点

接口不能实例化 类可以

## Class

本质是构造函数

```js
class Greeter {
 /**构造函数部分**/
  greeting: string; //这里比原生多一个类型检测
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

可以让 子类 实例化对象(表现在prototype上)

```ts
class Animal {
    /*构造函数部分*/
  public name: string;
  public constructor(theName: string) { this.name = theName; }
    /*原型部分*/
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

const cat=new Animal("cat") 
console.log(cat) //{name: "cat"}
console.log(cat.name)// err: 'name' 是私有的.只能在类Animal内使用,原理估计是ts还没有转成原生之前先检测,就是报错,和原生无关

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

​       可以被继承 不可以被实例化

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

  你可以使用 `readonly`关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。

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

###### ==泛型Class==

```ts
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };
```



## interface

==为引用类型和class类型的值设置一组规则==

TypeScript的核心原则之一是对值所具有的*结构*进行类型检查。 它有时被称做“鸭式辨型法”或“结构性子类型化”。 在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。

对变量限制的一组规则

对象接口

```js
interface LabelledValue {
  label: string; //只能使用label,不用使用size
}


let myObj = {size: 10,label: "Size 10 Object"};

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

printLabel(myObj);
```

可索引类型接口

```js
interface NumberArr{
    [index:number]: number
}
let numberArr:NumberArr = [1, 2, 3]
```

函数声明式接口

```js
interface SearchFunc { //函數類型接口
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;

mySearch = function (source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
}
```

###### ==泛型接口==

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

## Class和interface的继承

```js
interface InterfaceOne {
  //
  sports():void;
}
interface InterfaceTwo {
  //
  swimming():void
}
// 1.接口集成接口
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
// 2继承父类+实现多接口
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

//3继承父类+实现单个接口
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
//4.接口继承类
interface InterfaceFour extends SubCls2{
sleeping():void
}

let subCls2 = new SubCls2('小王');
subCls2.coding();
subCls2.sports();
subCls2.ktv();
subCls.swimming();


```

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



##### 接口继承一个接口

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

##### 接口继承类

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

##### 类继承一个类

##### 类实现一个接口

```ts
interface ClockInterface {
    currentTime: Date;
}

class Clock implements ClockInterface {
    currentTime: Date;
    constructor(h: number, m: number) { }
}
```

```js
interface Alarm {
    alert(): void;
}

class Door {
}

class SecurityDoor extends Door implements Alarm {
    alert() {
        console.log('SecurityDoor alert');
    }
}

class Car implements Alarm {
    alert() {
        console.log('Car alert');
    }
}
```



##### 类实现多个接口

```js
interface Alarm {
    alert(): void;
}

interface Light {
    lightOn(): void;
    lightOff(): void;
}

class Car implements Alarm, Light {
    alert() {
        console.log('Car alert');
    }
    lightOn() {
        console.log('Car light on');
    }
    lightOff() {
        console.log('Car light off');
    }
}
```



# 对对象类型约束

## 对对象约束

```js
let obj:{a:number,2:number}
obj={a:1,2:2}	
```

只读

```ts
let obj:{readonly a:number,readonly b:number}
obj={a:1,b:2}
```

可缺失

```ts
let obj: { a: number, b?: number }
obj = {a: 1 },
```

### 接口	

```ts
interface LabelledValue {
  label: string; //只能使用label,不用使用size
}


let myObj = {size: 10,label: "Size 10 Object"};

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}
printLabel(myObj);

```

```ts
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

###### ==泛型接口==

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

## 对可索引类型的约束

包括数组和类数组

### 接口

**可索引接口对数组的约束**

```js
interface NumberArr{
    [index:number]: number
}
let numberArr:NumberArr = [1, 2, 3]
```

```js
interface StringArr{
    [index:number]: string
}
let stringArr:StringArr = ['1', '2', '3']
```
```js
interface ObjectArr{
    [index:number]: object
}
let  objectArr:ObjectArr = [
    {name: 'xiao ming'}, {name: 'han mei mei'}
]
```

**对类数组对象的约束**

```js
interface UserObj {
  [index: string]: string
}
var arr: UserObj = { name: '张三' };
```

###### ==泛型接口==

```ts
interface Arr<T> {
  [index:number]: T;
}

let arrString: Arr<string>;
arrString = ["Bob", "Fred"];
let ArrNumber:Arr<number>
    

```

ts的默认索引类型Array的接口

```ts

interface Array<T> {
  [index:number]: T;
}

let arr: Array<string>;
arr = ["Bob", "Fred"];

```

## 对函数的约束

### 函数声明式

```js
                                 //:在add()后是限制它的返回值的
function add(x: number, y: number): number {
  return x + y;
}

console.log(add(1,2))
```

​          _ts会推断返回值类型所以可以省略返回值的设定_

```js

function(x: number, y: number) { 
    return x + y;
};
```

可缺失

```js
function(x: number, y: number,z?:number) { 
    return x + y;
};
```

###### ==泛型函数==

```ts
function identity<T>(arg: T): T { 
  return arg;
}
identity<string>("myString");  //运行方式1(函数指定T数据类型)'string'
identity("myString");  //运行方式2 type of output will be 'string'

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

多个参数泛型

```js
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}

let obj = { a: 1, b: 2, c: 3 }

getProperty(obj, 'a') // success

```

#### 接口

```ts
interface SearchFunc { //函數類型接口
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
}
```

对于函数类型的类型检查来说，函数的参数名不需要与接口里定义的名字相同。 比如，我们使用下面的代码重写上面的例子

```ts
mySearch = function (src: string, sub: string): boolean {
  let result = src.search(sub);
  return result > -1;
}

```

###### ==泛型接口==

```ts
interface GenericIdentityFn {
  <T>(m: T): T;
}

let myIdentity: GenericIdentityFn 
myIdentity= function (m) {
  return m
};

 myIdentity(1)

```

```ts
interface GenericIdentityFn<T> {
  (arg: T): T;
}

//确定接口里的T的值
let myIdentity: GenericIdentityFn<string>

myIdentity = function (arg) {
  return arg
};

const i: string = myIdentity('1')
console.log(i)
```



### 匿名函数

为myAdd变量设置类型检测

```ts
//检测变量myAdd类型为函数   //:限制了参数类型       =>限制了变量返回值的类型
let myAdd: (x: number, y: number) => number 
 
```

匿名函数内部变量的类型设置类型检测

```ts
//检测函数作用域的参数变量的类型和return变量的类型 
                              //在add()后加冒号是限制它的返回值的类型的意思
function(x: number, y: number): number { 
     return x + y; 
 };
```

匿名函数的值赋值给函数类型变量

```ts
let myAdd: (x: number, y: number) => number  
=function (x: number, y: number): number {   
    return x+y;
  };
console.log(myAdd(1,2))
```

######    ==泛型函数==

```js
let myIdentity= function <T>(arg: T): T {
  return arg;
}

console.log(myIdentity<number>(1))

```

```js
let myIdentity: { <T>(arg: T): T } = function <T>(arg: T): T {
  return arg;
}

console.log(myIdentity<number>(1))

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


