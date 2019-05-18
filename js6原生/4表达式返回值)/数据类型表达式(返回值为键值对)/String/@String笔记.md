# 和数组相同的公共方法

|公共方法|array|string（类数组）|Function|
|----|----|-----|-----|
|length|✓|✓|✓类数组参数|
|includes()|✓|✓||
|indexOf()|✓|✓||
|lastIndexOf()|✓|✓||
|concat()|✓|✓||
|截取|sclice|slice;substring(a,b) b>a||
|填充|padStart(7,'111111')|fill(’qsl’,1,4))|

# String的匹配方法

#### match

    <script>
        var str = 'Chapter00,Chapter1,Chapter99'
        a = /Chapter[1-9]{1,2}/g
        console.log(str.match(a))
    </script>
#### search

    <script>
        var str='shi,leiqin,'
        a=/(qin|shi)/
        console.log(str.search(a))
    </script>

#### replace
    <script>
        var str='shi,lei qin,'
        a=/(qin|shi)/
        console.log(str.replace(a,1111))

    </script>
# 截取
#### substring
```
substring(0,30) //参数2的值要比参数1大
```

####slice

```
var str='abcdefg'; 
str.slice(1)   //bcdefg      
str.slice(1,3)  // bc
str.slice(3,1) // ""
```

# 去除空格

```

str.trim('   123')
```

# 判断是否以xxx开头结尾


#### endsWith()

#### startsWith()

# 自动补全
#### padStart()
pad~padding 补丁

    a=`love`.padStart(7, '1111'); // 字符串love补足7位 用‘1111’补
#### padEnd()

# 重复
repeat()


