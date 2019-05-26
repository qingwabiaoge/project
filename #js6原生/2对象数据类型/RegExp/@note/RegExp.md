# 定义：正则是用表达式代替若干值


> /\s(ha){3}/gmi

> 用符号代表若干范围`单字符`

>用(qin)表示若干范围的`多字符`和(1+2)*3类似

>用符号{} ? + * 代表重复次数

> g m i 代表匹配模式全局 


# 定义实例

直面量

    var re = /hello/g;

构造函数

    var re = new RegExp('hello','g');   //代替/xxxx/

# 匹配模式: 全局 多行 大小写 


/m多行匹配 [英]multi- :多个

/g [英]globe

/i 对大小写不敏感

````
   var str = 'run runoob runooob runoooooob';

    a=/runo*/g     //runo*/g 可以代表run，runo，runoo，runooo, ......

    console.log(str.match(a));
````


# \  转意字符(单字符)
```
 . 代表任意字符
\. 表示真实的.

\n   换行  ~next

\r   制表

\t   回车  ~enter

\s   空格  ~space

\S   非空格

\d   数字1位  ~[英]digit

\D   非数字

\w   字符 ( 字母 ，数字，下划线_ )   //[英]word

\W   非字符

```


# （|）精确匹配(单字符)


（a|b）匹配a或者b


#  [-] 范围匹配(单字符)[^ ]排除后的范围匹配

[a-z][A-Z],[0-9] [a-zA-z]表示相应位置的字符要匹配英文字符和数字。

[  ^ ]表示排除  [^ \s]

[0-3]匹配0，1，2，3

[^ 0-3 ]匹配 4，5，6，7，8，9

[0-9]* 匹配数字（注意后面有 *，可以为空）

[0-9]+ 匹配数字（注意后面有 +，不可以为空）


# 次数类* +  ?  {}
### {}
{}一般用来表示匹配的长度，比如 \s{3} 表示匹配三个空格，\s{1,3}表示匹配一到三个空格。

### ?
 runo? 可以匹配 run 或者 runo，? 问号代表前面的字符最多只可以出现一次（0次、或1次）。**

### +
 runoo+b，可以匹配 runoob、runooob、runoooooob 等，+ 号代表前面的字符必须至少出现一次（1次或多次）。
### *
 runoo * b，可以匹配 runob、runoob、runoooooob 等，* 号代表字符可以不出现，也可以出现一次或者多次（0次、或1次、或多次）。

# 多字符匹配(分组匹配)

一个分组中可以像上面这样有一个具体的表达式，这样可以优雅地表达一个重复的字符串

```
/(ha){3}/
/hahaha/

```

# 位置类$ ^

^ 箭头-开头

匹配输入字符串的结尾位置。如果设置了 RegExp 对象的 Multiline 属性，则 $ 也匹配 '\n' 或 '\r'。要匹配 $ 字符本身，请使用 \$。

qin$以'qin'结尾

^\w以一个字符开始


```
  var str = 'my name is shilei'

    const reg = /^my.*lei$/

    const i = reg.test(str) //判断

```


# 普通正则 捕获() 非捕获(?:) 前瞻(?=) 前瞻否定(!=)

 几种正则的reg.test(str)的值都是一致的
 
 reg.exec(str)的值是不同的

 捕获的含义:
   * 捕获到reg.exec('xxx')[1],
   * 可以通过RegExp.$1访问,
   * 在表达式里通过/1访问
   
### 普通

```
  const reg = /kid is a doubi/
    console.log(reg.exec('kid is a doubi'))// [0:kid is a doubi]
```

### 捕获()

```
    const reg = /(doubi) is a doubi/
    console.log(reg.exec('doubi is a doubi'))// [0: "doubi is a doubi" 1: "doubi"]
    console.log(RegExp.$1 )//doubi,记忆窍门:和$1表达式的返回值的是一致的
```

```

   const reg = /(doubi) is a \1/
    console.log(reg.exec('doubi is a doubi'))// [0: "doubi is a doubi" 1: "doubi"]
    console.log(RegExp.$1 )//doubi

```

### 非捕获(?:)

和普通正则的区别是使用了括号可以多字符匹配(qin)*
```

    const reg = /kid is (a) (?:doubi)/
    console.log(reg.exec('kid is a doubi'))// [0:kid is a doubi,1:"a"] 
    console.log(RegExp.$1)//a,
    console.log(RegExp.$2)//空

```

### 前瞻(?=)  

  前瞻的含义是往前看一下,但不捕获

```
   const reg = /kid is a (?=doubi)/
   console.log(reg.exec('kid is a doubi'))// [0:kid is a] 返回值和上面普通型的不同
```

### 前瞻否定(?!)   

前瞻意思是往前看一下,不捕获

```

     const reg = /kid is a (?!doubi)/

    console.log(reg.test('kid is a doubi')) // false
    console.log(reg.test('kid is a shabi')) // true
    console.log(reg.exec('kid is a doubi'))// null
    console.log(reg.exec('kid is a shabi'))// ['0':"kid is a"]
```


# 贪婪模式和惰性模式 

" * "限定符和" + "限定符都是__贪婪的__，因为它们会尽可能多的匹配文字，

在它们的后面加上一个?就可以实现__非贪婪或最小匹配__。


```
如：<img src="test.jpg" width="60px" height="80px"/>
如果用正则匹配src中内容非懒惰模式匹配
/src=".*"/

匹配结果是：src="test.jpg" width="60px" height="80px"
意思是从="往后匹配，直到最后一个"匹配结束

懒惰模式正则：
/src=".*?"/
结果：src="test.jpg"
因为匹配到第一个"就结束了一次匹配。不会继续向后匹配。因为他懒惰嘛。


```
# 正则方法

#### test 返回booloen


```javascript
    <script>

        var str = 'Chapter12,Chapter99 ,Chapter1';
      a=/Chapter\d/g
        console.log(a.test(str))
    </script>
    
```

#### exec 返回数组

     <script>

        var str = 'Chapter12,Chapter99 ,Chapter1';
        const a=/Chapter\d/g
        console.log(a.exec(str))


     </script>

# 表单验证

```javascript

匹配中文：[\u4e00-\u9fa5]
行首行尾空格：^\s*|\s*$
Email：^\w+@[a-z0-9]+(\.[a-z]+){1,3}$
网址：[a-zA-z]+://[^\s]*
QQ号：[1-9][0-9]{4,9}
邮政编码：[1-9]\d{5}
身份证：[1-9]\d{14}|[1-9]\d{17}|[1-9]\d{16}x

```



# 注意
正则在部分代码里必须使用new RegExp _否则无效_

```
 const filter=new RegExp(this.filter)
```




