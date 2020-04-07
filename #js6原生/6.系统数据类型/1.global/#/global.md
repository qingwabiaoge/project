# global对象

全局属性和函数可用于所有内建的 JavaScript 对象

## 描述

全局对象是预定义的对象，作为 JavaScript 的全局函数和全局属性的占位符。通过使用全局对象，可以访问所有其他所有预定义的对象、函数和属性。全局对象不是任何对象的属性，所以它没有名称。

在顶层 JavaScript 代码中，可以用关键字 this 引用全局对象。但通常不必用这种方式引用全局对象，因为全局对象是作用域链的头，这意味着所有非限定性的变量和函数名都会作为该对象的属性来查询。例如，当JavaScript 代码引用 parseInt() 函数时，它引用的是全局对象的 parseInt 属性。全局对象是作用域链的头，还意味着在顶层 JavaScript 代码中声明的所有变量都将成为全局对象的属性。

全局对象只是一个对象，而不是类。既没有构造函数，也无法实例化一个新的全局对象。

在 JavaScript 代码嵌入一个特殊环境中时，全局对象通常具有环境特定的属性。实际上，ECMAScript 标准没有规定全局对象的类型，JavaScript 的实现或嵌入的 JavaScript 都可以把任意类型的对象作为全局对象，只要该对象定义了这里列出的基本属性和函数。例如，在允许通过 LiveConnect 或相关的技术来脚本化 Java 的 JavaScript 实现中，全局对象被赋予了这里列出的 java 和 Package 属性以及 getClass() 方法。而在客户端 JavaScript 中，全局对象就是 Window 对象，表示允许 JavaScript 代码的 Web 浏览器窗口。

## 全局方法

### 1. decodeURI

可对 encodeURI() 函数编码过的 URI 进行解码

#### 返回值

URIstring 的副本，其中的十六进制转义序列将被它们表示的字符替换。

```
decodeURI(URIstring)
```

#### 参数

- 必须
- - URIstring 一个字符串，含有要解码的 URI 或其他要解码的文本。

```
var test="www.zshgrwz.cn/360  "

document.write(encodeURI(test)+ "<br />")
document.write(decodeURI(test))

结果:
    www.zshgrwz.cn/360%20%20
    www.zshgrwz.cn/36012345678
```

### 2. decodeURIComponent

可对 encodeURIComponent() 函数编码的 URI 进行解码

#### 　返回值

URIstring 的副本，其中的十六进制转义序列将被它们表示的字符替换。

```
decodeURIComponent(URIstring)
```

#### 参数

- 必须
- - URIstring 一个字符串，含有编码 URI 组件或其他要解码的文本。

```
var test="www.zshgrwz.cn/360  "

document.write(encodeURIComponent(test)+ "<br />")
document.write(decodeURIComponent(test))

结果:
    www.zshgrwz.cn%2F360%20%20
    www.zshgrwz.cn/360
123456789
```

### 3. encodeURI

可把字符串作为 URI 进行编码

#### 　返回值

URIstring 的副本，其中的某些字符将被十六进制的转义序列进行替换。

#### 说明

该方法不会对 ASCII 字母和数字进行编码，也不会对这些 ASCII 标点符号进行编码： - _ . ! ~ * ’ ( ) 。

该方法的目的是对 URI 进行完整的编码，因此对以下在 URI 中具有特殊含义的 ASCII 标点符号，encodeURI() 函数是不会进行转义的：;/?:@&=+$,#

#### 提示：

如果 URI 组件中含有分隔符，比如 ? 和 #，则应当使用 encodeURIComponent() 方法分别对各组件进行编码。

```
encodeURI(URIstring)
```

#### 参数

- 必须
- URIstring 一个字符串，含有 URI 或其他要编码的文本。

```
var test = "www.zshgrwz.cn/360"
var test2 =  "www.zshgrwz.cn/3 6 0"

document.write(encodeURI(test)+ "<br />")
document.write(encodeURI(test2)+ "<br />")
document.write(encodeURI("&,/?#=+:@$"))

结果:
    www.zshgrwz.cn/360
    www.zshgrwz.cn/3%206%200
    &,/?#=+:@$
123456789101112
```

### 4. encodeURIComponent

数可把字符串作为 URI 组件进行编码

#### 　返回值

URIstring 的副本，其中的某些字符将被十六进制的转义序列进行替换。

#### 说明

该方法不会对 ASCII 字母和数字进行编码，也不会对这些 ASCII 标点符号进行编码： - _ . ! ~ * ’ ( ) 。

其他字符（比如 ：;/?:@&=+$,# 这些用于分隔 URI 组件的标点符号），都是由一个或多个十六进制的转义序列替换的。

#### 提示：

请注意 encodeURIComponent() 函数 与 encodeURI() 函数的区别之处，前者假定它的参数是 URI 的一部分（比如协议、主机名、路径或查询字符串）。因此 encodeURIComponent() 函数将转义用于分隔 URI 各个部分的标点符号。

```
encodeURIComponent(URIstring)
```

#### 参数

- 必须
- - URIstring 一个字符串，含有 URI 组件或其他要编码的文本。

```
var test="www.zshgrwz.cn/360  "

document.write(encodeURIComponent(test)+ "<br />")
document.write(encodeURIComponent(test))
document.write(encodeURIComponent("&,/?#=+:@$"))

结果:
    www.zshgrwz.cn%2F360%20%20
    www.zshgrwz.cn/360
    %26%2C%2F%3F%23%3D%2B%3A%40%24
1234567891011
```

### 5. escape

对字符串进行编码，这样就可以在所有的计算机上读取该字符串

注释：ECMAScript v3 反对使用该方法，应用使用 decodeURI() 和 decodeURIComponent() 替代它。

### 6. eval

计算某个字符串，并执行其中的的 JavaScript 代码

#### 返回值

通过计算 string 得到的值（如果有的话）。

#### 说明

该方法只接受原始字符串作为参数，如果 string 参数不是原始字符串，那么该方法将不作任何改变地返回。因此请不要为 eval() 函数传递 String 对象来作为参数。

如果试图覆盖 eval 属性或把 eval() 方法赋予另一个属性，并通过该属性调用它，则 ECMAScript 实现允许抛出一个 EvalError 异常。

#### 抛出

如果参数中没有合法的表达式和语句，则抛出 SyntaxError 异常。

如果非法调用 eval()，则抛出 EvalError 异常。

如果传递给 eval() 的 Javascript 代码生成了一个异常，eval() 将把该异常传递给调用者。

#### 提示：虽然 eval() 的功能非常强大，但在实际使用中用到它的情况并不多。

```
eval(string)
```

#### 参数

- 必需
- - string 要计算的字符串，其中含有要计算的 JavaScript 表达式或要执行的语句。

```
eval("console.log('asd');console.log('asd');")
// asd asd
123
```

### 7. isFinite

用于检查其参数是否是无穷大

#### 返回值

如果 number 是有限数字（或可转换为有限数字），那么返回 true。否则，如果 number 是 NaN（非数字），或者是正、负无穷大的数，则返回 false。

#### 提示：如果参数number不为数字则转化为数字。

```
isFinite(number)
```

#### 参数

- 必需
- - number 要检测的数字。

```
document.write(isFinite(Math.pow(10000000,50))+ "<br />")
document.write(isFinite(-5)+ "<br />")
document.write(isFinite(100-63)+ "<br />")
document.write(isFinite(-0)+ "<br />")
document.write(isFinite("zsh")+ "<br />")
document.write(isFinite("2017")+ "<br />")

结果:
    false
    true
    true
    true
    false
    true

```

### 8. isNaN

用于检查其参数是否是非数字值

#### 返回值

如果 x 是特殊的非数字值 NaN（或者能被转换为这样的值），返回的值就是 true。如果 x 是其他值,则返回 false。

```
isNaN(x)
```

#### 参数

- 必需
- - x 要检测的值。

```
document.write(isNaN(Math.pow(10000000,50))+ "<br />")
document.write(isNaN(-5)+ "<br />")
document.write(isNaN(100-63)+ "<br />")
document.write(isNaN(-0)+ "<br />")
document.write(isNaN("zsh")+ "<br />")
document.write(isNaN("2017")+ "<br />")

结果:
    false
    false
    false
    false
    true
    false
```



## 全局属性

### 1. infinity

代表正的无穷大的数值

#### 说明

无法使用 for/in 循环来枚举 Infinity 属性，也不能用 delete 运算符来删除它。
Infinity 不是常量，可以把它设置为其他值。

```
Infinity
var t1=1.7976931348623157E+10308
document.write(t1)

document.write("<br />")

var t2=-1.7976931348623157E+10308
document.write(t2)

结果:
    Infinity
    -Infinity
```



### 2. NaN

用于引用特殊的非数字值

#### 说明

无法使用 for/in 循环来枚举 NaN 属性，也不能用 delete 运算符来删除它。
NaN 不是常量，可以把它设置为其他值。

#### 提示：

请使用 isNaN() 来判断一个值是否是数字。原因是 NaN 与所有值都不相等，包括它自己。

```
NaN
var test1="300"
var test2="Hello World!"

document.write(Number(test1)+ "<br />")
document.write(Number(test2)+ "<br />")

document.write(isNaN(test1)+ "<br />")
document.write(isNaN(test2))

结果:
    300
    NaN
    false
    true

```

### 3. undefined

用于存放 JavaScript 的 undefined 值

#### 说明

无法使用 for/in 循环来枚举 undefined 属性，也不能用 delete 运算符来删除它。
undefined 不是常量，可以把它设置为其他值。
当尝试读取不存在的对象属性时也会返回 undefined。

#### 提示：

只能用 === 运算来测试某个值是否是未定义的，因为 == 运算符认为 undefined 值等价于 null。

#### 注释：

null 表示无值，而 undefined 表示一个未声明的变量，或已声明但没有赋值的变量，或一个并不存在的对象属性。

```
undefined
var t1=""
var t2

if (t1===undefined) {document.write("t1 is undefined")}
if (t2===undefined) {document.write("t2 is undefined")}


结果:
    t2 is undefined
```
