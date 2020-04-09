# 新建实例

### Number(i:any)

把对象的值转换为数字

##### 返回值

如果参数是 Date 对象，Number() 返回从 1970 年 1 月 1 日至今的毫秒数。

如果对象的值无法转换为数字，那么 Number() 函数返回 NaN。

```
var arr = [1];

document.write(Number(true)+ "<br />");
document.write(Number(new Date())+ "<br />");
document.write(Number("158")+ "<br />");
document.write(Number("zsh")+ "<br />");
document.write(Number(arr)+ "<br />");

结果:
    1
    1499436337950
    158
    zsh
    1

```

### parseFloat(s:String):number

可解析一个字符串，并返回一个浮点数。
该函数指定字符串中的首个字符是否是数字。如果是，则对字符串进行解析，直到到达数字的末端为止，然后以数字返回该数字，而不是作为字符串。

##### 作用

parseFloat 是全局函数，不属于任何对象。

parseFloat 将它的字符串参数解析成为浮点数并返回。如果在解析过程中遇到了正负号（+ 或 -）、数字 (0-9)、小数点，或者科学记数法中的指数（e 或 E）以外的字符，则它会忽略该字符以及之后的所有字符，返回当前已经解析到的浮点数。同时参数字符串首位的空白符会被忽略。

如果参数字符串的第一个字符不能被解析成为数字，则 parseFloat 返回 NaN。

您可以通过调用 isNaN 函数来判断 parseFloat 的返回结果是否是 NaN。如果让 NaN 作为了任意数学运算的操作数，则运算结果必定也是 NaN。

如果只想解析数字的整数部分，请使用 parseInt() 方法。

##### 参数

开头和结尾的空格是允许的。

```
var arr = [1];

document.write(parseFloat(arr))
document.write(parseFloat("10"))
document.write(parseFloat("10.00"))
document.write(parseFloat("10.33"))
document.write(parseFloat("34 45 66"))
document.write(parseFloat(" 60 "))
document.write(parseFloat("40 years"))
document.write(parseFloat("He was 40"))

结果:
    1
    10
    10
    10.33
    34
    60
    40
    NaN
```

### parseInt(s:String,radix:int):int

可解析一个字符串，并返回一个整数

#### 参数

##### s

开头和结尾的空格是允许的。

如果字符串的第一个字符不能被转换为数字，那么 parseInt() 会返回 NaN。

##### radix 

当参数 radix 的值为 0，或没有设置该参数时，parseInt() 会根据 string 来判断数字的基数。

举例，如果 string 以 “0x” 开头，parseInt() 会把 string 的其余部分解析为十六进制的整数。如果 string 以 0 开头，那么 ECMAScript v3 允许 parseInt() 的一个实现把其后的字符解析为八进制或十六进制的数字。如果 string 以 1 ~ 9 的数字开头，parseInt() 将把它解析为十进制的整数。

```
parseInt("10");         //返回 10
parseInt("19",10);      //返回 19 (10+9)
parseInt("11",2);       //返回 3 (2+1)
parseInt("17",8);       //返回 15 (8+7)
parseInt("1f",16);      //返回 31 (16+15)
parseInt("010");        //未定：返回 10 或 8


parseInt( [1])          // 1
```

